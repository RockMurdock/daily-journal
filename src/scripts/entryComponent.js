

const createJournalEntry = entry => `
    <div class="container">
        <h3>${entry.concept}</h3>
        <p>${entry.entry}<br>${entry.date}</p>
        <button id="deleteBtn--${entry.id}">Delete</button>
    </div>
`
export default createJournalEntry