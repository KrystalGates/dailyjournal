import {journalEntryComponent1} from "./entryComponent.js"

function listEntries(entryArr) {
  const entryContainer = document.querySelector(".entryLog");
  entryContainer.innerHTML = ""
  entryArr.forEach(entry => {
    entryContainer.appendChild(journalEntryComponent1(entry));
  });
}

export {
listEntries
};


