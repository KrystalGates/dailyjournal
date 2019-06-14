const funcForDom = {
    addToDom (newEntry){
    const entryContainer = document.querySelector(".entryLog");
    entryContainer.innerHTML+=newEntry
  },


    appendJournalEntriesToDom (journalArr){
        journalArr.forEach(entry => {
        const newEntryHTML = makeJournalEntryComponents.journalEntryComponent1(entry)
        funcForDom.addToDom(newEntryHTML)
    })
}
}




      