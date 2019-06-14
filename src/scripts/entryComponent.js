const makeJournalEntryComponents = {
  journalEntryComponent1 (journalEntry) {
    return `<div><p>Journal Date: ${
      journalEntry.journalDate
    }</p><p>Concepts Covered: ${
      journalEntry.conceptsCovered
    }</p><p>Journal Entry: ${journalEntry.journalEntry}</p><p> Mood: ${
      journalEntry.moodForDay}</p></div>`
  }
}

