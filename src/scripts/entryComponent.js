import {deleteJournalEntry} from "./data.js"

const entryContainer = document.querySelector(".entryLog");

function listEntries(entryArr){
  entryArr.forEach( entry => {
    entryContainer.appendChild(journalEntryComponent1(entry))
  })
}

function journalEntryComponent1 (journalEntry) {
  let el = document.createElement("div")
  let deleteBtn = document.createElement("button")
  el.innerHTML = `<p>Journal Date: ${
      journalEntry.journalDate
    }</p><p>Concepts Covered: ${
      journalEntry.conceptsCovered
    }</p><p>Journal Entry: ${journalEntry.journalEntry}</p><p> Mood: ${
      journalEntry.moodForDay}</p>`
  el.appendChild(deleteBtn)
  deleteBtn.setAttribute("id", `${journalEntry.id}`)
  deleteBtn.textContent = "Delete"
  deleteBtn.addEventListener("click", event => {
    let id = event.target.id
    deleteJournalEntry(id)
    console.log(id)
    .then( data =>{
      listEntries()
    })
  })
  return el
}




export{journalEntryComponent1, listEntries, entryContainer}



