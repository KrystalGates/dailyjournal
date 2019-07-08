import {getJournalEntries} from "./data.js";
import {listEntries} from "./entriesDOM.js"

function filterEntriesByMood() {
    document.getElementsByName("moodBtn").forEach(radioBtn => {
      radioBtn.addEventListener("click", event => {
        const mood = event.target.value;
        getJournalEntries().then(entries => {
          const filterMoodArr = entries.filter(
            entry => entry["moodForDay"] === mood
          );
          listEntries(filterMoodArr);
        });
      });
    });
  }

  function searchEntries() {
    document.querySelector("#searchInput").addEventListener("keypress", event => {
      if (event.keyCode === 13) {
        let searchInput = document.querySelector("#searchInput").value;
        let searchInputLowerCase = searchInput.toLowerCase();
        let searchResultsArr = [];
        getJournalEntries().then(entries => {
          entries.forEach(entry => {
            let entryToLowerCase = {
              date: entry.journalDate,
              concepts: entry.conceptsCovered.toLowerCase(),
              entry: entry.journalEntry.toLowerCase(),
              mood: entry.moodForDay.toLowerCase()
            };
            for (const value of Object.values(entryToLowerCase)) {
              if (
                value.includes(searchInputLowerCase) === true &&
                !searchResultsArr.includes(entry)
              ) {
                searchResultsArr.push(entry);
              }
            }
          });
          listEntries(searchResultsArr);
        });
      }
    });
  }

  function clearSearch() {
    document.querySelector("#clearSearchBtn").addEventListener("click", event => {
      getJournalEntries().then(entryData => {
        listEntries(entryData);
      });
    });
  }

  export {filterEntriesByMood, searchEntries, clearSearch}