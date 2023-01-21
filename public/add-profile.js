async function newFormHandler(event) {
    event.preventDefault();
    const account_name = document.querySelector('#account_name').value;
    const description = document.querySelector('#description').value;
    const password = document.querySelector('#password').value;
    // Send fetch request to add a new profile
    const response = await fetch(`/api/profile`, {
      method: 'POST',
      body: JSON.stringify({
        account_name: account_name,
        description,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the profile is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add profile');
    }
  }
  
  document.querySelector('.new-profile-form').addEventListener('submit', newFormHandler);