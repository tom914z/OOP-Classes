// Define the person object
const person = {
    name: 'John Doe',
    occupation: 'Developer'
};

// Function to display the person object in the UI
function displayPersonObject() {
    document.getElementById('personObject').textContent = JSON.stringify(person, null, 2);
}

// Function to display output in the console section
function displayConsoleOutput(message) {
    document.getElementById('consoleOutput').textContent += message + '\n';
}

// Freeze the person object
document.getElementById('freezeButton').addEventListener('click', () => {
    Object.freeze(person);
    displayConsoleOutput('The person object has been frozen.');
    displayPersonObject();
});

// Seal the person object
document.getElementById('sealButton').addEventListener('click', () => {
    Object.seal(person);
    displayConsoleOutput('The person object has been sealed.');
    displayPersonObject();
});

// Try to edit the name property
document.getElementById('editNameButton').addEventListener('click', () => {
    try {
        person.name = 'Jane Smith';
        displayConsoleOutput('Tried to change name to "Jane Smith".');
    } catch (e) {
        displayConsoleOutput('Error: Cannot modify name property.');
    }
    displayPersonObject();
});

// Try to add a new property (age)
document.getElementById('addAgeButton').addEventListener('click', () => {
    try {
        person.age = 30;
        displayConsoleOutput('Tried to add age property.');
    } catch (e) {
        displayConsoleOutput('Error: Cannot add new properties.');
    }
    displayPersonObject();
});

// Initialize the UI with the person object
displayPersonObject();
