document.getElementById("registrationForm").addEventListener("submit", function(event) {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");

    if (username === "" || email === "" || password === "") {
        alert("All fields must be filled out");
        event.preventDefault();
        return;
    }

    // Simple email validation using regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        event.preventDefault();
        return;
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        event.preventDefault();
        return;
    }

    alert("Registration successful!");
    // Here you can add code to submit the form data to a server or perform any other necessary actions
});