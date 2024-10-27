// Load existing messages from localStorage
document.addEventListener('DOMContentLoaded', loadMessages);

document.getElementById('submitBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    if (userInput) {
        addMessage(userInput);
        saveMessage(userInput);
        document.getElementById('userInput').value = ''; // Clear the input
    }
});

function addMessage(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<p>${message}</p>`;
}

function saveMessage(message) {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
}

function loadMessages() {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.forEach(addMessage);
}
