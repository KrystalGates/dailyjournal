function getJournalEntries () {
        return fetch("http://localhost:8088/journalEntries")
            .then(response => response.json())
            // .then (response => {
            //     response.forEach( entry => {
            //         entryContainer.innerHTML += journalEntryComponent1(entry)
            //     });
            // })
    }


function addNewJournalEntry(newEntry){
    console.log(newEntry)
    return fetch("http://localhost:8088/journalEntries", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEntry)
    })
}

export {getJournalEntries, addNewJournalEntry}



 
