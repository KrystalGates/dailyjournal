import {
  recordEntryBtnListener,
  filterEntriesByMood,
  searchEntries,
  clearSearch
} from "./entriesDOM.js";
import { getJournalEntries } from "./data.js";
import { listEntries } from "./entryComponent.js";

getJournalEntries().then(entryData => listEntries(entryData));
recordEntryBtnListener();
filterEntriesByMood();
searchEntries();
clearSearch();
