// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Validation
    if (!username || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Show loading state
    const loginBtn = document.querySelector('.login-btn');
    const originalText = loginBtn.textContent;
    loginBtn.textContent = 'Logging in...';
    loginBtn.disabled = true;
    
    // Simulate login request (replace with actual API call)
    setTimeout(() => {
        // In a real application, you would send this data to a server
        console.log('Login attempted with:', {
            username: username,
            password: password
        });
        
        // Reset button
        loginBtn.textContent = originalText;
        loginBtn.disabled = false;
        
        // Show success message (replace with actual login handling)
        alert('Demo login - In a real app, this would authenticate with Instagram');
        
        // Clear form
        document.getElementById('loginForm').reset();
    }, 1500);
});

// Handle Facebook login
document.querySelector('.facebook-login').addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Facebook login clicked');
    alert('Facebook login is not implemented in this demo');
});

// Handle "Forgot password" link
document.querySelector('.forgot-password').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Forgot password page would open here');
});

// Handle "Sign up" link
document.querySelector('.signup-section a').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Sign up page would open here');
});

// Input validation styling
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#b3b3b3';
    });
    
    input.addEventListener('blur', function() {
        this.style.borderColor = '#dbdbdb';
    });
});

// Password visibility toggle (optional feature)
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}