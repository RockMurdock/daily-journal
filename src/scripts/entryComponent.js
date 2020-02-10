

const createJournalEntry = entry => `
    <div class="container">
        <h3>${entry.concept}</h3>
        <p>${entry.entry}<br>${entry.date}</p>
        <button id="deleteBtn--${entry.id}">Delete</button>
        <button id="editBtn--${entry.id}">Edit</button>
    </div>
`
export default createJournalEntry