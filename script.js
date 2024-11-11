document.addEventListener('DOMContentLoaded', () => {
    generateCalendar();
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