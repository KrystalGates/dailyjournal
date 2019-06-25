import {deleteJournalEntry} from "./data.js"

function deleteBtnListener (event) {
    let id = event.target.id
    deleteJournalEntry(id)
    .then( data =>{
      listEntries()
    })
  }
  
  function editBtnListener(event) {
    let date = document.querySelector("#journalDate")
    let concepts = document.querySelector("#conceptsCovered")
    let entry = document.querySelector("#journalEntry")
    let mood = document.querySelector("#moodForDay")
    let hidden = document.querySelector("#hiddenInput")
    let editButtonId = event.target.id
    let editButtonArr = editButtonId.split("--")
    let editButtonIdNum = editButtonArr[1]
    hidden.value = editButtonIdNum
    let saveBtn = document.querySelector("#saveBtn")
    saveBtn.innerHTML = "Save"
    fetch(`http://localhost:8088/journalEntries/${editButtonIdNum}`)
    .then(response => response.json())
    .then(entryEdit => {
      date.value = entryEdit.journalDate 
      concepts.value = entryEdit.conceptsCovered
      entry.value = entryEdit.journalEntry
      mood.value = entryEdit.moodForDay   
    }
  )}

  export {deleteBtnListener, editBtnListener}