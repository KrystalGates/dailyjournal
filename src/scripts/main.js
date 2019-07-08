import {
  recordEntryBtnListener
} from "./events.js";
import {filterEntriesByMood,
  searchEntries,
  clearSearch } from "./filterEntries.js"
import { getJournalEntries } from "./data.js";
import { listEntries } from "./entriesDOM";

getJournalEntries().then(entryData => listEntries(entryData));
recordEntryBtnListener();
filterEntriesByMood();
searchEntries();
clearSearch();
