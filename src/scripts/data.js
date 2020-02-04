

const API = {
    getJournalEntries() {
        const journalUrl = "http://localhost:3000/entries"
        return fetch(journalUrl)
            .then(response => response.json())
    },
    addJournalEntry(entry) {
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    }
}
    


export default API