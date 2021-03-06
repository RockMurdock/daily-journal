const journalUrl = "http://localhost:3000";

const API = {
  getJournalEntries() {
    return fetch(`${journalUrl}/entries`).then(response => response.json());
  },
  addJournalEntry(entry) {
    return fetch(`${journalUrl}/entries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    });
  },
  deleteJournalEntry(entryId) {
    return fetch(`${journalUrl}/entries/${entryId}`, {
      method: "DELETE"
    });
  },
  editJournalEntry(entry) {
    return fetch(`${journalUrl}/entries/${entry.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    });
  }
};

export default API;
