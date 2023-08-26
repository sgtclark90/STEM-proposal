document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function () {
        const nameInput = document.getElementById("nameInput").value;

        if (nameInput.trim() !== "") {
            logNameLocally(nameInput);
            updateSubmissionCount();
            alert("Thank you for showing your support!");
        } else {
            alert("Please enter a valid name.");
        }
    });

    // Load and display the submission count on page load
    updateSubmissionCount();
});

function logNameLocally(name) {
    const storedNames = JSON.parse(localStorage.getItem("visitedNames")) || [];

    storedNames.push(name);
    localStorage.setItem("visitedNames", JSON.stringify(storedNames));

    console.log("Name logged locally:", name);
}

function updateSubmissionCount() {
    const storedNames = JSON.parse(localStorage.getItem("visitedNames")) || [];
    const submissionCount = storedNames.length;

    const countElement = document.getElementById("submissionCount");
    countElement.textContent = submissionCount;
}