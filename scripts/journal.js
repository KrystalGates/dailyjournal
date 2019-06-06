// Define the keys and value for a JavaScript object that
// represents a journal entry about what you learned today

const allJournalEntries = [];

const objectsJournalEntry = {
  journalDate: "",
  conceptsCovered: "",
  journalEntry: "",
  moodForDay: ""
};

const journalEntries = [
  {
    journalDate: "05/20/2019",
    conceptsCovered:
      "How to operate in the terminal, how to use code editor, HTML basics",
    journalEntry:
      "Today we learned how to make commands on the command line in the terminal including how to make directories and files and how to move from directory to directory. We also went over basic HTML as familarized ourselves with VSCODE our code editor",
    moodForDay: "Excited"
  },
  {
    journalDate: "06/04/2019",
    conceptsCovered: "How to build the DOM using components",
    journalEntry:
      "Today has been a bit rough. Learning how to write multiple functions then injecting them into the DOM",
    moodForDay: "Been a weird day"
  }
];

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = function(journalEntry) {
  return `<div><div>Journal Date: ${
    journalEntry.journalDate
  }</div><div>Concepts Covered: ${
    journalEntry.conceptsCovered
  }</div><div>Journal Entry: ${journalEntry.journalEntry}</div><div> Mood: ${
    journalEntry.moodForDay}</div></div>`;
};

const container = document.querySelector(".entryLog");

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/

const renderJournalEntries = function(entries){
  for (i = 0; i < entries.length; i++) {
    let entry = "";
    entry = makeJournalEntryComponent(entries[i]);
    container.innerHTML += entry;
  }
};

renderJournalEntries(journalEntries);


