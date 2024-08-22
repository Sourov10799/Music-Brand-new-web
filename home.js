document.addEventListener('DOMContentLoaded', function() {
    // Handle play button click (could be for music or video)
    const playButton = document.querySelector('.btn-play');
    playButton.addEventListener('click', playMedia);

    // Handle 'Get Our Latest Album' button click
    const getAlbumButton = document.querySelector('.btn-header');
    getAlbumButton.addEventListener('click', showAlbumInfo);

    // Handle 'Buy Tickets' button clicks
    const buyTicketButtons = document.querySelectorAll('.tour-btn');
    buyTicketButtons.forEach(button => {
        button.addEventListener('click', buyTicket);
    });

    // Function to open YouTube link in a new tab
    function playMedia() {
        const url = 'https://youtu.be/uB2rhjulY4Q?si=6r2A1L2_VX75MntC';
        window.open(url, '_blank'); // Opens the link in a new tab
    }

    // Function to redirect user to the store page for the album
    function showAlbumInfo() {
        window.location.href = 'http://127.0.0.1:5500/store.html'; // Redirect to store page
    }

    // Function to handle buying tickets
    function buyTicket(event) {
        const buttonClicked = event.target;
        const tourDate = buttonClicked.parentElement.querySelector('.tour-date').innerText;
        const tourCity = buttonClicked.parentElement.querySelector('.tour-city').innerText;
        const tourArena = buttonClicked.parentElement.querySelector('.tour-arena').innerText;

        alert(`You are buying tickets for the concert on ${tourDate} in ${tourCity} at ${tourArena}`);
    }
});
