// Function to hide progress bar and show confirmation content
function showConfirmation() {
    document.getElementById('progressContainer').style.display = 'none';
    document.getElementById('confirmationContent').style.display = 'block';

    // Attach click event listener to the "OK" button
    document.getElementById('okButton').addEventListener('click', function() {
        window.location.href = '..\index(main-Page)\index.html';
    });
}

// Function to trigger the transition after the progress animation
function startTransition() {
    // Execute the showConfirmation function after the progress animation (2s)
    setTimeout(showConfirmation, 2000);
}

// Trigger the transition when the page loads
window.onload = startTransition;
