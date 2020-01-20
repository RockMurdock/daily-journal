

const journalEntries = [
    {
        date: "01/07/2020",
        concept: "Styling with CSS Selectors",
        entry: "Learned how to style html pages using CSS",
        mood: "Excited",
    },
    {
        date: "01/08/2020",
        concept: "How to Research Code",
        entry: "Today I learned efficient ways to research code to solve problems in my coding",
        mood: "Excited"
    },
    {
        date: "01/09/2020",
        concept: "Basic HTML Layout with Flexbox",
        entry: "Today I learned the wondrous power of flexbox command",
        mood: "Happy"
    }
];

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `<div class="entry">
    <h1>${journalEntry.concept}</h1>
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

// Invoke the render function
renderJournalEntries(journalEntries)

