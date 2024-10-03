// Function to simulate an AI cybersecurity scan
function startAI() {
    const button = document.querySelector('button');
    const originalText = button.innerText;

    // Change button text to show the scan is in progress
    button.innerText = 'Running AI Security Scan...';
    button.disabled = true;

    // Simulate AI scan with a delay (like loading or analyzing data)
    setTimeout(() => {
        // After the scan, show a result to the user
        alert('AI Security Scan Complete. No threats detected.');
        
        // Restore the button state
        button.innerText = originalText;
        button.disabled = false;
    }, 3000); // Simulate a 3-second scan
}
