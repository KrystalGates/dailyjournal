function formValidation() {
  if (journalDate.value == "") {
    alert("Please enter date!");
    return false;
  } else if (conceptsCovered.value == "") {
    alert("Please enter Concepts Covered!");
    return false;
  } else if (journalEntry.value == "") {
    alert("Please fill in Journal Entry!");
    return false;
  } else if (moodForDay.value == "") {
    alert("Please select a Mood!");
    return false;
  }
  return true;
}

function formValidationCharacters() {
  let allowedChar = /^[0-9a-zA-Z()/{}:;.!, ]+$/;
  if (
    conceptsCovered.value.match(allowedChar) &&
    journalEntry.value.match(allowedChar)
  ) {
    return true;
  } else {
    alert("Please use approved characters only");
    return false;
  }
}

function conceptInputLength() {
  if (conceptsCovered.value.length > 45) {
    alert("Please use less then 45 characters in Concepts Covered!");
    return false;
  }
  return true;
}

export { formValidation, formValidationCharacters, conceptInputLength };
