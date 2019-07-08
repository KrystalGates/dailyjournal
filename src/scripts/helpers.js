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

  export {buildJournalEntry}