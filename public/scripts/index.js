//get the submit button
const submitBtn = document.getElementById("submitButton");
const inputBox = document.getElementById("messageBox");
//assign the  handler function on onEnterKeyPress in the input field
inputBox.addEventListener("keypress", (e) => {
  //detects whether the key pressed is Enter key or not
  if (e.key === "Enter") {
    onSubmitHandler(); //call  to the onSubmitHandler() function on enter key pess
  }
});
//define function for onclick handler of the submit button
const onSubmitHandler = () => {
  //get the span element where messages will be displayed
  const previousMessageContainer = document.getElementById(
    "previousMessageContainer"
  );
  previousMessageContainer.innerHTML = inputBox.value
    ? inputBox.value
    : "No Message";
};
//assign the function to the  submit button onclick
submitBtn.addEventListener("click", onSubmitHandler); //the eventlistener takes reference of the handler function or an anonyous function
