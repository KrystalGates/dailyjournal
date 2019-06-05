
    // Define the keys and value for a JavaScript object that
    // represents a journal entry about what you learned today

const allJournalEntries = [];

const objectsJournalEntry = {
    journalDate: "",
    conceptsCovered: "",
    journalEntry: "",
    moodForDay: "",
}

const objectsJournalEntry1 = {
    journalDate: "05/20/2019",
    conceptsCovered: "How to operate in the terminal, how to use code editor, HTML basics",
    journalEntry: "Today we learned how to make commands on the command line in the terminal including how to make directories and files and how to move from directory to directory. We also went over basic HTML as familarized ourselves with VSCODE our code editor",
    moodForDay: "Excited",
}

const objectsJournalEntry2 = {
    journalDate: "06/04/2019",
    conceptsCovered: "How to build the DOM using components",
    journalEntry: "Today has been a bit rough. Learning how to write multiple functions then injecting them into the DOM",
    moodForDay: "Been a weird day",
}

const addEntry = function (newEntry){
    allJournalEntries.push(newEntry)
}

addEntry(objectsJournalEntry1);

console.log(allJournalEntries);


