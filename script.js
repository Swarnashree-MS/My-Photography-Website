document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! We will get back to you shortly.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
