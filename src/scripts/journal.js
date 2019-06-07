// Your learning objective in this chapter is to set up 
// JSON Server to store the data for your daily journal entries, 
// query that data from the API, and then use your knowledge of 
// Promises (remember, fetch is a fancy Promise) and then() to 
// render the entries to the DOM.



const allJournalEntries = [];

const objectsJournalEntry = {
  journalDate: "",
  conceptsCovered: "",
  journalEntry: "",
  moodForDay: ""
};




const makeJournalEntryComponent = function(journalEntry) {
  return `<div><p>Journal Date: ${
    journalEntry.journalDate
  }</p><p>Concepts Covered: ${
    journalEntry.conceptsCovered
  }</p><p>Journal Entry: ${journalEntry.journalEntry}</p><p> Mood: ${
    journalEntry.moodForDay}</p></div>`;
};

const entryContainer = document.querySelector(".entryLog");


fetch("http://localhost:3000/journalEntries") // Fetch from the API
    .then(data => data.json())  // Parse as JSON
    .then(entries => {
        entries.forEach(entry => {
          const newEntryHTML = makeJournalEntryComponent(entry)
          entryContainer.innerHTML+=newEntryHTML
        });// What should happen when we finally have the array?
    })


