import createJournalEntry from "/scripts/entryComponent.js"
const journalContainer = document.querySelector(".entryLog");
/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = entries => {
    journalContainer.textContent = ""

    for(const entry of entries) {
        const entryCard = createJournalEntry(entry)
        journalContainer.innerHTML += entryCard
    }
}

export default renderJournalEntries