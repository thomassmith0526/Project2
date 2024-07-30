
async function newFormHandlerTwo(event) {
  
  event.preventDefault()

console.log('task')

  const employee_id = document.getElementById('employee_id').value;

  const date = document.getElementById('date').value;

  const task_id = document.getElementById('task').value;

  const isDone = document.getElementById('isDone').checked;


  console.log({
      employee_id,
      task_id,
      date,
      isDone,
  })


  const response = await fetch(`/api/tasks`, {
      method: 'POST',
      body: JSON.stringify({
          employee_id,
          task_id,
          date,
          isDone,
      }),

      headers: {
          'accept': 'application/json',
          'content-type': 'application/json'
      },
  });


  if (response.ok) {
      document.location.replace('/');
  } else {

      alert('Failed to find Task')
  }
}

addEventListener('submit', newFormHandlerTwo)
document.querySelector('.form-group')