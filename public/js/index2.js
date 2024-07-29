async function taskFormHandler(event) {
    event.preventDefault();

    const taskName = document.getElementById('name').value;
    const taskDescription = document.getElementById('description').value;
    const taskPrice = document.getElementById('price').value;

    // Added this to handle empty fields
    if (taskName === "" || taskDescription === "" || taskPrice === "") {
        window.alert("Please input all required fields before adding a task");
        return;
    }

    const response = await fetch('api/tasks', {
        method: 'POST',
        body: JSON.stringify({
            name: taskName,
            description: taskDescription,
            price: taskPrice
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        // Reload the page to display the updated task list
        document.location.reload();
    } else {
        alert('Failed to add Task');
    }
}

document.querySelector('.add-task').addEventListener('submit', taskFormHandler);