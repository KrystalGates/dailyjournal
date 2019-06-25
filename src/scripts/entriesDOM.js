import { addNewJournalEntry, getJournalEntries, updateEntry } from "./data.js";
import { listEntries, entryContainer } from "./entryComponent.js";
import {formValidation, formValidationCharacters, conceptInputLength} from "./formValidation.js"

let journalDate = document.querySelector("#journalDate");
let conceptsCovered = document.querySelector("#conceptsCovered");
let journalEntry = document.querySelector("#journalEntry");
let moodForDay = document.querySelector("#moodForDay");

function recordEntryBtnListener() {
  document.querySelector("#saveBtn").addEventListener("click", event => {
    event.preventDefault();
    const hiddenValue = document.querySelector("#hiddenInput").value
    console.log(hiddenValue)
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
      if(hiddenValue !== ""){
        newEntry.id = parseInt(hiddenValue)
        updateEntry(newEntry)
        .then(data => data.json()
        .then(dataJS => {
        entryContainer.innerHTML = "";
        getJournalEntries().then(entryData => listEntries(entryData)); 
        hiddenValue = ""
        }))
      }
      else{
      addNewJournalEntry(newEntry)
        .then(data => data.json())
        .then(dataJS => {
          entryContainer.innerHTML = "";
          getJournalEntries().then(entryData => listEntries(entryData));
        });
  }}
});
}

function buildJournalEntry(
  journalDate,
  conceptsCovered,
  journalEntry,
  moodForDay
) {
  return {
    journalDate: journalDate.value,
    conceptsCovered: conceptsCovered.value,
    journalEntry: journalEntry.value,
    moodForDay: moodForDay.value
  };
}


function filterEntriesByMood() {
  document.getElementsByName("moodBtn").forEach(radioBtn => {
  radioBtn.addEventListener("click", event => {
    const mood = event.target.value;
    getJournalEntries().then(entries => {
      const filterMoodArr = entries.filter(
        entry => entry["moodForDay"] === mood
      )
      entryContainer.innerHTML = "";
      listEntries(filterMoodArr);
    });
  });
});
}


export { recordEntryBtnListener, buildJournalEntry,filterEntriesByMood};
