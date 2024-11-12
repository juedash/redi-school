const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Perform custom validation logic
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value; // Ensure the ID matches the form field
    const username = document.getElementById('username').value;
    const age = document.getElementById('age').value;

    if (!emailIsValid(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Collect all form data and display in an alert
    const formData = `
        Username: ${username}
        Email: ${email}
        Age: ${age}
        Password: ${'*'.repeat(password.length)} (hidden for security)
    `;

    alert('Form Data:\n' + formData);

    // If validation passes, submit the form
    form.submit();
});

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
