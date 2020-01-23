const journalUrl = "http://localhost:3000/entries"

fetch(journalUrl)
    .then(entries => entries.json())
    .then(parsedEntries => {
        renderJournalEntries(parsedEntries)
    })

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
    <div class="entry">
        <h3>${journalEntry.concept}</h3>
        <p>${journalEntry.entry}<br>${journalEntry.date}</p>
    </div>
    `
}

const journalContainer = document.querySelector(".entryLog");
/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {
    for (let i = 0; i < entries.length; i++) {
        journalContainer.innerHTML += makeJournalEntryComponent(entries[i]);
    }
};



