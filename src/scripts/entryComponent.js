

const createJournalEntry = entry => `
    <div class="container">
        <h3>${entry.concept}</h3>
        <p>${entry.entry}<br>${entry.date}</p>
</div>
`
export default createJournalEntry