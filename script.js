const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzeWRpZnRjbmxoaHFzYWlieW9kIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczODMxMTMwNCwiZXhwIjoyMDUzODg3MzA0fQ.kYMe6LtdW_BK6yUXIVJO4DLfFRJqNlLuvM4EB_vJsHQ';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signUpButton = document.getElementById('signUp');
const logInButton = document.getElementById('logIn');
const logOutButton = document.getElementById('logOut');
const fetchDataButton = document.getElementById('fetchData');
const dataContainer = document.getElementById('data-container');
const dataDisplay = document.getElementById('data');

// Sign Up Functionality
signUpButton.addEventListener('click', async () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    const { user, error } = await supabaseClient.auth.signUp({ email, password });
    if (error) {
        alert(`Error: ${error.message}`);
    } else {
        alert('Sign-up successful! Please check your email to confirm your account.');
    }
});

// Log In Functionality
logInButton.addEventListener('click', async () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    const { user, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
        alert(`Error: ${error.message}`);
    } else {
        alert('Log in successful!');
        toggleAuthState(true);
    }
});

// Log Out Functionality
logOutButton.addEventListener('click', async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
        alert(`Error: ${error.message}`);
    } else {
        alert('Log out successful!');
        toggleAuthState(false);
    }
});

// Fetch Data Functionality
fetchDataButton.addEventListener('click', async () => {
    const { data, error } = await supabaseClient.from('example_table').select('*');
    if (error) {
        dataDisplay.innerHTML = `Error: ${error.message}`;
    } else {
        dataDisplay.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    }
});

// Toggle UI Based on Authentication State
const toggleAuthState = (isLoggedIn) => {
    document.getElementById('auth-container').style.display = isLoggedIn ? 'none' : 'block';
    dataContainer.style.display = isLoggedIn ? 'block' : 'none';
};

// Check User Authentication State on Page Load
supabaseClient.auth.getUser().then(({ data: { user } }) => {
    toggleAuthState(!!user);
});
