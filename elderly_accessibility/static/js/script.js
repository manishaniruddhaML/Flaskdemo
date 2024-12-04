let fontSize = 16;
let isHighContrast = false;

function adjustFontSize(action) {
    if (action === 'increase') fontSize += 2;
    else if (action === 'decrease') fontSize -= 2;

    document.body.style.fontSize = fontSize + 'px';
}

function toggleContrast() {
    isHighContrast = !isHighContrast;
    document.body.classList.toggle('high-contrast', isHighContrast);
}

function submitFeedback() {
    const feedback = document.getElementById('feedback').value;

    fetch('/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedback }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        document.getElementById('feedback').value = ''; // Clear form
    })
    .catch(error => console.error('Error:', error));
}
