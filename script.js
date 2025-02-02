document.getElementById("emergency-button").addEventListener("click", function() {
    // Simulate an emergency alert
    alert("Emergency alert sent! Stay calm, help is on the way!");

    // Optionally, redirect to emergency phone number, or open messaging services
    // For example, on mobile devices, you can use the `tel:` scheme to initiate a phone call
    window.location.href = "tel:+112"; // This will open the dialer with a number
});
