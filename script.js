function callAPI(method) {
    const idInstance = document.getElementById('idInstance').value;
    const apiToken = document.getElementById('ApiTokenInstance').value;
    
    fetch(`https://api.green-api.com/${method}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        },
        body: JSON.stringify({ idInstance })
    })
    .then(response => response.json())
    .then(data => document.getElementById('responseField').innerText = JSON.stringify(data, null, 2))
    .catch(error => document.getElementById('responseField').innerText = `Error: ${error.message}`);
}

function sendMessage() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;
    const idInstance = document.getElementById('idInstance').value;
    const apiToken = document.getElementById('ApiTokenInstance').value;

    fetch(`https://api.green-api.com/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        },
        body: JSON.stringify({ idInstance, phoneNumber, message })
    })
    .then(response => response.json())
    .then(data => document.getElementById('responseField').innerText = JSON.stringify(data, null, 2))
    .catch(error => document.getElementById('responseField').innerText = `Error: ${error.message}`);
}

function sendFileByUrl() {
    const phoneNumber = document.getElementById('phoneNumberFile').value;
    const fileUrl = document.getElementById('fileUrl').value;
    const idInstance = document.getElementById('idInstance').value;
    const apiToken = document.getElementById('ApiTokenInstance').value;

    fetch(`https://api.green-api.com/sendFileByUrl`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        },
        body: JSON.stringify({ idInstance, phoneNumber, fileUrl })
    })
    .then(response => response.json())
    .then(data => document.getElementById('responseField').innerText = JSON.stringify(data, null, 2))
    .catch(error => document.getElementById('responseField').innerText = `Error: ${error.message}`);
}