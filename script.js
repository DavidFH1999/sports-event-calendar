document.addEventListener('DOMContentLoaded', () => {
    const addEventButton = document.getElementById('addEventButton');
    generateCalendar();

    addEventButton.addEventListener('click', () => {
        // Get the values from the form fields
        const eventDate = document.getElementById('eventDate').value;
        const eventTime = document.getElementById('eventTime').value;
        const eventSport = document.getElementById('eventSport').value;
        const teams = document.getElementById('teams').value;

        // Check if any field is empty
        if (!eventDate || !eventTime || !eventSport || !teams) {
            alert("Please fill in all fields!");
        } else {
            addEvent();
        }
    });
});


// Function to generate the calendar
function generateCalendar() {
    const calendarGrid = document.querySelector('.calendar-grid');
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Get the number of days in the current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Clear the calendar grid
    calendarGrid.innerHTML = '';
    // Create day cells for the current month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('day');
        dayCell.textContent = day;
        dayCell.setAttribute('data-day', day);

        // Add the created cell to the calendar grid
        calendarGrid.appendChild(dayCell);
    }
}

// Function to show a specific section
function showSection(sectionId) {
    document.getElementById('calendar').style.display = 'none'; // Hide the calendar section
    document.getElementById('addEvent').style.display = 'none'; // Hide the add event section
    document.getElementById(sectionId).style.display = 'block'; // Show the selected section
}

// Function to close the navigation bar on smaller devices
function closeNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');
    if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
    }
}

function addEvent() {
    const eventDate = document.getElementById('eventDate').value;
    const eventTime = document.getElementById('eventTime').value;
    const eventSport = document.getElementById('eventSport').value;
    const teams = document.getElementById('teams').value;

    // Create an object to store the data
    const event = {
        date: eventDate,
        time: eventTime,
        sport: eventSport,
        teams: teams
    };

    // Convert the object to a JSON string
    const eventJSON = JSON.stringify(event);

    // Store the JSON string in local storage with a key
    localStorage.setItem('event', eventJSON);
}