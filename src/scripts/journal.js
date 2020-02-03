import API from "/scripts/data.js"
import entriesDOM from "/scripts/entriesDOM.js"
/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/
API.getJournalEntries().then(entriesDOM.renderJournalEntries)