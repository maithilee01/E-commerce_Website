// Function to show the order alert
function showAlert() {
    document.getElementById('orderAlert').style.display = 'block';
}

// Function to close the order alert and redirect to index.html
function closeAlert() {
    window.location.href = 'index.html'; // Redirect to index.html
}

// Simulate showing the alert after an order is placed
window.onload = function() {
    showAlert();
};