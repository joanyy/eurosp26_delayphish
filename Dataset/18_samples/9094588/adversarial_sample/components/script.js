document.getElementById('myForm').addEventListener('submit', function (e) {
    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Error elements
    const emailError = document.getElementById('emailError');
    const emailErrorIcon = document.getElementById('emailerrorIcon');
    const emailErrorMessage = document.getElementById('emailerrorMessage');

    const passwordError = document.getElementById('passwordError');
    const passwordErrorIcon = document.getElementById('passworderrorIcon');
    const passwordErrorMessage = document.getElementById('passwordErrorMessage');

    let isValid = true;

    // Email pattern for basic validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    // Reset previous errors
    emailError.style.display = 'none';
    emailErrorIcon.style.display = 'none';
    emailErrorMessage.textContent = '';
    
    passwordError.style.display = 'none';
    passwordErrorIcon.style.display = 'none';
    passwordErrorMessage.textContent = '';

    // Validate email
    if (!email) {
        emailError.style.display = 'flex';
        emailErrorIcon.style.display = 'inline-block';
        emailErrorMessage.textContent = 'This field may not be blank.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.style.display = 'flex';
        emailErrorIcon.style.display = 'inline-block';
        emailErrorMessage.textContent = 'Enter a valid email address.';
        isValid = false;
    }

    // Validate password
    if (!password) {
        passwordError.style.display = 'flex';
        passwordErrorIcon.style.display = 'inline-block';
        passwordErrorMessage.textContent = 'This field may not be blank.';
        isValid = false;
    }

    // Prevent form submission if there are validation errors
    if (!isValid) {
        e.preventDefault();
    }
});















function myFunction() {
    var x = document.getElementById("password");
    var eyeIcon = document.getElementById("eyeIcon");

    // Toggle the password visibility
    if (x.type === "password") {
        x.type = "text"; // Show password
        eyeIcon.classList.remove('fa-eye'); // Change icon to eye-slash
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        x.type = "password"; // Hide password
        eyeIcon.classList.remove('fa-eye-slash'); // Change icon back to eye
        eyeIcon.classList.add('fa-eye');
    }
}

