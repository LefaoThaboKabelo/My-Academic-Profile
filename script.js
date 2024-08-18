document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            event.preventDefault(); // Prevent form submission
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault(); // Prevent form submission
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

