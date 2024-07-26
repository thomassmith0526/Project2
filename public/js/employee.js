async function newFormHandler(event) {
    event.preventDefault()
    
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;

    const response = await fetch(`api/employees`, {
        method: 'POST',
        body: JSON.stringify({
            first_name,
            last_name,
        }),
        headers: {
            'Content-Type': 'application/json',
          },
    });
}

addEventListener('submit', newFormHandler)
document.querySelector('.form-group')