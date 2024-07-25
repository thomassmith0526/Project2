async function newFormHandler(event) {
    event.preventDefault()
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const location = document.getElementById('location').value;
    const task = document.getElementById('task').value

    const response = await fetch(`api/client`, {
        method: 'POST',
        body: JSON.stringify({
            first_name,
            last_name,
            location,
            task,
        }),
        headers: {
            'Content-Type': "application/json",
        },
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to add Client')
    }
}





