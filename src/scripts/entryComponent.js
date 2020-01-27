/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
/*const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
    <div class="entry">
        <h3>${journalEntry.concept}</h3>
        <p>${journalEntry.entry}<br>${journalEntry.date}</p>
    </div>
    `
}
*/

const entryComponent = {
    makeJournalEntryComponent(journalEntry) {
        // Create your own HTML structure for a journal entry
        return `
            <div class="container">
                <h3>${journalEntry.concept}</h3>
                <p>${journalEntry.entry}<br>${journalEntry.date}</p>
            </div>
    `
    }
}