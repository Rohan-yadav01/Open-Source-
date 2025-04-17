// DOM Elements
const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');
const authModal = document.querySelector('.auth-modal');

// Show modal function
function showAuthModal(isLogin) {
    authModal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>${isLogin ? 'Login' : 'Sign Up'}</h2>
            <form id="auth-form">
                ${!isLogin ? '<input type="text" placeholder="Full Name" required>' : ''}
                <input type="email" placeholder="Email" required>
                <input type="password" placeholder="Password" required>
                ${!isLogin ? '<input type="password" placeholder="Confirm Password" required>' : ''}
                <button type="submit">${isLogin ? 'Login' : 'Create Account'}</button>
            </form>
            <p class="auth-switch">
                ${isLogin ? 'Don\'t have an account? ' : 'Already have an account? '}
                <a href="#" class="switch-auth">${isLogin ? 'Sign up' : 'Login'}</a>
            </p>
        </div>
    `;
    
    authModal.style.display = 'block';
    
    // Close modal
    document.querySelector('.close-modal').addEventListener('click', () => {
        authModal.style.display = 'none';
    });
    
    // Switch between login/signup
    document.querySelector('.switch-auth').addEventListener('click', (e) => {
        e.preventDefault();
        showAuthModal(!isLogin);
    });
    
    // Form submission
    document.getElementById('auth-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your authentication logic here
        alert(`${isLogin ? 'Login' : 'Sign up'} functionality will be implemented here`);
        authModal.style.display = 'none';
    });
}

// Event listeners
loginBtn.addEventListener('click', () => showAuthModal(true));
signupBtn.addEventListener('click', () => showAuthModal(false));

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === authModal) {
        authModal.style.display = 'none';
    }
});