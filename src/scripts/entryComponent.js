const entryContainer = document.querySelector(".entryLog");

function journalEntryComponent1 (journalEntry) {
    return `<div><p>Journal Date: ${
      journalEntry.journalDate
    }</p><p>Concepts Covered: ${
      journalEntry.conceptsCovered
    }</p><p>Journal Entry: ${journalEntry.journalEntry}</p><p> Mood: ${
      journalEntry.moodForDay}</p></div>`
  }

  function listEntries(entryArr){
    entryArr.forEach( entry => {
      entryContainer.innerHTML += journalEntryComponent1(entry)
    })
  }


export{journalEntryComponent1, listEntries}



