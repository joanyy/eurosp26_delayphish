// Password visibility toggle
document.querySelectorAll('.password-toggle').forEach(icon => {
    icon.addEventListener('click', () => {
        const passwordInput = icon.previousElementSibling;
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.classList.replace('fa-eye', 'fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            icon.classList.replace('fa-eye-slash', 'fa-eye');
        }
    });
});

// Form validation
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = this.querySelector('input[type="text"]').value;
    const password = this.querySelector('input[type="password"]').value;

    if (!username || !password) {
        alert('Please fill in all fields');
        return;
    }

    // For demonstration only - don't store passwords in real applications
    console.log('Login attempt:', { username, password });
    alert('This is a demo. No data will be sent.');
});
