import API from "/scripts/data.js"
import renderJournalEntries from "/scripts/entriesDOM.js"
import eventManager from "/scripts/journalAddEvents.js"
/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/
API.getJournalEntries().then(renderJournalEntries)
eventManager.addRecordEntryEventListener()
eventManager.addRadioButtonEventListener()

