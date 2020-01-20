/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const journalEntry_1 = {
    date: "01/07/2020",
    concept: "Styling with CSS Selectors",
    entry: "Learned how to style html pages using CSS",
    mood: "Excited",
}

const journalEntry_2 = {
    date: "01/08/2020",
    concept: "How to Research Code",
    entry: "Today I learned efficient ways to research code to solve problems in my coding",
    mood: "Excited"
}

const journalEntry_3 = {
    date:"01/09/2020",
    concept:"Basic HTML Layout with Flexbox",
    entry:"Today I learned the wondrous power of flexbox command",
    mood:"Happy"
}

const journalEntries = [];

journalEntries.push(journalEntry_1, journalEntry_2, journalEntry_3);

console.log(journalEntries);

