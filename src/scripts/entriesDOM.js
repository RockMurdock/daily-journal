const journalContainer = document.querySelector(".entryLog");
/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
/*const renderJournalEntries = (entries) => {
    for (let i = 0; i < entries.length; i++) {
        journalContainer.innerHTML += makeJournalEntryComponent(entries[i]);
    }
};
*/

const entriesDOM = {
    renderJournalEntries(entries) {
        for (let i = 0; i < entries.length; i++) {
            journalContainer.innerHTML += entryComponent.makeJournalEntryComponent(entries[i]);
        }
    }
}