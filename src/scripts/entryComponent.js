import { deleteBtnListener, editBtnListener } from "./events.js";

function journalEntryComponent1(journalEntry) {
  let el = document.createElement("div");
  let deleteBtn = document.createElement("button");
  let editBtn = document.createElement("button");
  el.innerHTML = `<p>Journal Date: ${
    journalEntry.journalDate
  }</p><p>Concepts Covered: ${
    journalEntry.conceptsCovered
  }</p><p>Journal Entry: ${journalEntry.journalEntry}</p><p> Mood: ${
    journalEntry.moodForDay
  }</p>`;
  el.appendChild(deleteBtn);
  el.appendChild(editBtn);
  deleteBtn.setAttribute("id", `${journalEntry.id}`);
  editBtn.setAttribute("id", `editBtn--${journalEntry.id}`);
  deleteBtn.textContent = "Delete";
  editBtn.textContent = "Edit";
  deleteBtn.addEventListener("click", deleteBtnListener);
  editBtn.addEventListener("click", editBtnListener);
  return el;
}

export { journalEntryComponent1 };
