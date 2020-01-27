const journalUrl = "http://localhost:3000/entries"

const API = {
    getJournalEntries() {
        return fetch(journalUrl)
            .then(response => response.json())
    }
}