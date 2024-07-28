


async function newFormHandlerTwo(event) {
    event.preventDefault()
console.log('wake')
    const client_id = document.getElementById('client_id').value;
    const employee_id = document.getElementById('employee_id').value;
    const task_id = document.getElementById('task').value;
    const date = document.getElementById('date').value;
    const comments = document.getElementById('comments').value;
    const isDone = document.getElementById('isDone').checked;

    console.log({
        client_id,
        employee_id,
        task_id,
        date,
        comments,
        isDone,
    })

    const response = await fetch(`/api/jobs`, {
        method: 'POST',
        body: JSON.stringify({
            client_id,
            employee_id,
            task_id,
            date,
            comments,
            isDone,
        }),
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to add Job')
    }
}
addEventListener('submit', newFormHandlerTwo)
document.querySelector('.form-group')