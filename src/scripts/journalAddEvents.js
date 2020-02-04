import API from "/scripts/data.js"
import renderJournalEntries from "/scripts/entriesDOM.js"

const recordEntryEventManager = {
    addRecordEntryEventListener() {
        const button = document.querySelector(".journalButton")

        button.addEventListener("click", () => {

            const inputJournalDate = document.getElementById("journalDate").value
            const inputJournalConcepts = document.getElementById("journalConcepts").value
            const inputJournalEntry = document.getElementById("journalEntry").value
            const inputJournalMood = document.getElementById("journalMood").value

            if (inputJournalDate == false || inputJournalConcepts == false || inputJournalEntry == false) {
                window.alert("Pleae fill out all Journal Entry Fields")
            } else {
                const createJournalEntry = {

                    date: inputJournalDate,
                    concept: inputJournalConcepts,
                    entry: inputJournalEntry,
                    mood: inputJournalMood

                }
                API.addJournalEntry(createJournalEntry)
                    .then(() => {
                        API.getJournalEntries().then(renderJournalEntries)
                    })
            }
        })
    }
}
export default recordEntryEventManager