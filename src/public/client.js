console.log('clientSide js is working');

const triggerButton = document.getElementById('triggerButton');
triggerButton.addEventListener('click', () => {
    console.log('triggerButton was clicked');
    window.location.href = (window.location.href + 'load');
});

setInterval(() => {
    fetch('/status', { method: 'GET'})
    .then((response) => {
        if (response.ok) return response.json();
        throw new Error('Request failed.');
    })
    .then((data) => {
        console.log(data);
        document.getElementById('status').innerHTML = `Status: ${data[0].Status}`;
    })
    .catch((error) => {
        console.log(error);
    });
}, 2000);