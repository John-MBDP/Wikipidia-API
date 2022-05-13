/**
 * STEPS:
 *
 * 1. Extract all selectors, create helper functions
 * 2. Read through the API's documentation and understand what needs to be included in the params of the request,
 *    create a generic params object
 * 3. Register event listeners, fetch the data per the user's input
 * 4. Output results to the UI (success and error)
 * 5. Adjust UI states accordingly
 */

const submitButton = document.querySelector("#Submit");
const input = document.querySelector("#input");
const errorSpan = document.querySelector("#error");
const resultsContainer = document.querySelector("#results");

const disableUi = () => {
  input.disabled = true;
  submitButton.disabled = true;
};
const enableUi = () => {
  input.disabled = false;
  submitButton.disabled = false;
};

const clearPreviousResults = () => {
  resultsContainer.innerHTML = "";
  errorSpan.innerHTML = "";
};

const isInputEmpty = (input) => {
  if (!input || input === "") return true;
  return false;
};

const showError = (error) => {
  errorSpan.innerHTML = `❌${error}❌`;
};
