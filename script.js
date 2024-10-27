document.getElementById('submitBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<p>${userInput}</p>`;
    document.getElementById('userInput').value = ''; // Clear the input
});
