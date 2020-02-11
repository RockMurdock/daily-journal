import API from "/scripts/data.js"
import renderJournalEntries from "/scripts/entriesDOM.js"
import eventManager from "/scripts/journalAddEvents.js"
/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

eventManager.addRecordEntryEventListener()
eventManager.addRadioButtonEventListener()
eventManager.journalDeleteEventListener()
eventManager.addSearchEntryEventListener()
API.getJournalEntries().then(renderJournalEntries)