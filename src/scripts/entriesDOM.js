import { addNewJournalEntry, getJournalEntries } from "./data.js";
import { listEntries, entryContainer } from "./entryComponent.js";
import {formValidation, formValidationCharacters, conceptInputLength} from "./formValidation.js"

let journalDate = document.querySelector("#journalDate");
let conceptsCovered = document.querySelector("#conceptsCovered");
let journalEntry = document.querySelector("#journalEntry");
let moodForDay = document.querySelector("#moodForDay");

function recordBtnListener() {
  document.querySelector("#saveBtn").addEventListener("click", () => {
    event.preventDefault();
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
      addNewJournalEntry(newEntry);
      console
        .log(newEntry)
        .then(data => data.json())
        .then(dataJS => {
          entryContainer.innerHTML = "";
          getJournalEntries().then(entryData => listEntries(entryData));
        });
    }
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
      const filterExcited = entries.filter(
        entry => entry["moodForDay"] === mood
      )
      entryContainer.innerHTML = "";
      listEntries(filterExcited);
    });
  });
});
}

export { recordBtnListener,filterEntriesByMood };
