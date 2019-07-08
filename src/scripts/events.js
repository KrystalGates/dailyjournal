import { deleteJournalEntry, getJournalEntries, addNewJournalEntry, updateEntry } from "./data.js";
import {listEntries} from "./entriesDOM.js"
import {buildJournalEntry} from "./helpers.js"
import {formValidation, formValidationCharacters, conceptInputLength} from "./formValidation.js";

function recordEntryBtnListener() {
  document.querySelector("#saveBtn").addEventListener("click", event => {
    event.preventDefault();
    let journalDate = document.querySelector("#journalDate");
    let conceptsCovered = document.querySelector("#conceptsCovered");
    let journalEntry = document.querySelector("#journalEntry");
    let moodForDay = document.querySelector("#moodForDay");
    const hiddenValue = document.querySelector("#hiddenInput").value;
    let formVal = formValidation();
    let checkChar = formValidationCharacters();
    let checkConcept = conceptInputLength();
    if (formVal === true && checkConcept === true && checkChar === true) {
      let newEntry = buildJournalEntry(
        journalDate,
        conceptsCovered,
        journalEntry,
        moodForDay
      );
      if (hiddenValue !== "") {
        newEntry.id = parseInt(hiddenValue);
        saveBtn.innerHTML = "Record Journal Entry"
        updateEntry(newEntry).then(dataJS => {
            getJournalEntries().then(entryData => listEntries(entryData));
            hiddenValue = "";
          })
        ;
      } else {
        addNewJournalEntry(newEntry)
          .then(dataJS => {
            getJournalEntries().then(entryData => listEntries(entryData));
          });
      }
    }
    document.querySelector(".form").reset()
  });
}

function deleteBtnListener(event) {
  let id = event.target.id;
  deleteJournalEntry(id).then(data => {
    getJournalEntries()
    .then(entryData => listEntries(entryData));
  });
}

function editBtnListener(event) {
  document.querySelector("#journalDate").focus()
  let date = document.querySelector("#journalDate");
  let concepts = document.querySelector("#conceptsCovered");
  let entry = document.querySelector("#journalEntry");
  let mood = document.querySelector("#moodForDay");
  let hidden = document.querySelector("#hiddenInput");
  let editButtonId = event.target.id;
  let editButtonArr = editButtonId.split("--");
  let editButtonIdNum = editButtonArr[1];
  hidden.value = editButtonIdNum;
  let saveBtn = document.querySelector("#saveBtn");
  saveBtn.innerHTML = "Save";
  fetch(`http://localhost:8088/journalEntries/${editButtonIdNum}`)
    .then(response => response.json())
    .then(entryEdit => {
      date.value = entryEdit.journalDate;
      concepts.value = entryEdit.conceptsCovered;
      entry.value = entryEdit.journalEntry;
      mood.value = entryEdit.moodForDay;
    });
}

export { recordEntryBtnListener, deleteBtnListener, editBtnListener };
