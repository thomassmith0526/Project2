async function newFormHandler(event) {
    event.preventDefault()

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





