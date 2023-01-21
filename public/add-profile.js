async function newFormHandler(event) {
    event.preventDefault();
    const account_name = document.querySelector('#account_name').value;
    const description = document.querySelector('#description').value;
    const guest_name = document.querySelector('#guest_name').value;
    // The following is a ternary operator. It checks to see if has_nuts is checked. If it is, it will return true, otherwise, it will return false.
    const has_nuts = document.querySelector('#has_nuts:checked') ? true : false;
    // Send fetch request to add a new profile
    const response = await fetch(`/api/profile`, {
      method: 'POST',
      body: JSON.stringify({
        account_name: account_name,
        description,
        guest_name,
        has_nuts,
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