function getJournalEntries() {
  return fetch("http://localhost:8088/journalEntries").then(response =>
    response.json()
  );
}

function addNewJournalEntry(newEntry) {
  console.log(newEntry);
  return fetch("http://localhost:8088/journalEntries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newEntry)
  });
}

function deleteJournalEntry(id) {
  return fetch(`http://localhost:8088/journalEntries/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
}

function updateEntry(updatedEntry) {
  return fetch(`http://localhost:8088/journalEntries/${updatedEntry.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedEntry)
  });
}

export {
  getJournalEntries,
  addNewJournalEntry,
  deleteJournalEntry,
  updateEntry
};
