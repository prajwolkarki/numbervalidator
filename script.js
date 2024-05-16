document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    const resultsDiv = document.getElementById('results-div');
    
    const pattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)?(\d{3})([\s\-]?)(\d{4})$/;

    if (userInput.trim() === '') {
        alert("Please provide a phone number");
    } else {
        if (pattern.test(userInput)) {
            resultsDiv.textContent = `Valid US number: ${userInput}`;
        } else {
            resultsDiv.textContent = `Invalid US number: ${userInput}`;
        }
    }
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('results-div').textContent = '';
});
