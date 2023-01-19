const {pushCode} = require('./github');

// Event listener for form submission
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Get the code from the textarea
    let code = document.querySelector('textarea').value;
    // Encode the code as base64
    let encodedCode = btoa(code);
    // Push the code to the repository
    pushCode('file.txt', encodedCode);
});
