async function newFormHandler(event) {
    event.preventDefault();
    const account_name = document.querySelector('#account_name').value;
    const description = document.querySelector('#description').value;
    const guest_name = document.querySelector('#guest_name').value;
    // Send fetch request to add a new profile
    const response = await fetch(`/api/profile`, {
      method: 'POST',
      body: JSON.stringify({
        account_name: account_name,
        description,
        guest_name,
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