import API from "/scripts/data.js"
import renderJournalEntries from "/scripts/entriesDOM.js"
import recordEntryEventManager from "/scripts/journalAddEvents.js"
/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/
API.getJournalEntries().then(renderJournalEntries)
recordEntryEventManager.addRecordEntryEventListener()

/*const recordEntryEventManager = {
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
                const createJournalEntry = function (date, concepts, entry, mood) {
                    return {
                        "date": date,
                        "concept": concepts,
                        "entry": entry,
                        "mood": mood
                    }
                }
                const raw = createJournalEntry(inputJournalDate, inputJournalConcepts, inputJournalEntry, inputJournalMood)
                return fetch("http://localhost:3000/entries", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(raw)
                }).then((res) => res.json())
                    .then((data) => console.log(data))
                    .catch((err) => console.log(err))
            }
        }
        )
        
    }
}
recordEntryEventManager.addRecordEntryEventListener() */