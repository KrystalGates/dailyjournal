import{recordBtnListener, filterEntriesByMood} from "./entriesDOM.js"
import{getJournalEntries} from "./data.js"
import{listEntries} from "./entryComponent.js"



getJournalEntries()
.then((entryData)=> listEntries(entryData))
recordBtnListener()
filterEntriesByMood()








