import { addNewJournalEntry, getJournalEntries } from "./data.js";
import { listEntries, entryContainer } from "./entryComponent.js";

let journalDate = document.querySelector("#journalDate");
let conceptsCovered = document.querySelector("#conceptsCovered");
let journalEntry = document.querySelector("#journalEntry");
let moodForDay = document.querySelector("#moodForDay");

function recordBtnListener() {
  document.querySelector("#saveBtn").addEventListener("click", () => {
    event.preventDefault();
    let formVal = formValidation();
    let checkChar = formValidationCharacters();
    let checkConcept = conceptLength();
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

function formValidation() {
  if (journalDate.value == "") {
    alert("Please enter date!");
    return false;
  } else if (conceptsCovered.value == "") {
    alert("Please enter Concepts Covered!");
    return false;
  } else if (journalEntry.value == "") {
    alert("Please fill in Journal Entry!");
    return false;
  } else if (moodForDay.value == "") {
    alert("Please select a Mood!");
    return false;
  }
  return true;
}

function formValidationCharacters() {
  let allowedChar = /^[0-9a-zA-Z()/{}:;. ]+$/;
  if (
    conceptsCovered.value.match(allowedChar) &&
    journalEntry.value.match(allowedChar)
  ) {
    return true;
  } else {
    alert("Please use approved characters only");
    return false;
  }
}

function conceptLength() {
  if (conceptsCovered.value.length > 25) {
    alert("Please use less then 25 characters in Concepts Covered!");
    return false;
  }
  return true;
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

export { recordBtnListener };
