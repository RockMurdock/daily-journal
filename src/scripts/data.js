

const API = {
    getJournalEntries() {
        const journalUrl = "http://localhost:3000/entries"
        return fetch(journalUrl)
            .then(response => response.json())
    }
}

export default API