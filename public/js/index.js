async function newFormHandler(event) {
    event.preventDefault()
    console.log('shhh micah')
    
    const first_name = document.getElementById('first_name').value;
    console.log()
    const last_name = document.getElementById('last_name').value;
    const location = document.getElementById('location').value;
    const task = document.getElementById('task').value

    const response = await fetch(`api/clients`, {
        method: 'POST',
        body: JSON.stringify({
            first_name,
            last_name,
            location,
        }),
        headers: {
            'Content-Type': 'application/json',
          },
    });
    // if (response.ok) {
    //     document.location.replace('/');
    // } else {
    //     alert('Failed to add Client')
    // }
    // const responseTask = await fetch(`/api/jobs`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         task
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json',
    //       },
    // });
    // if(responseTask.ok) {
    //     document.location.replace('/');
    // } else {
    //     alert('Failed to add Task')
    // }
}
addEventListener('submit', newFormHandler)
document.querySelector('.form-group')
    
    
    console.log('ahahahahaahah')

// const checkbox = document.getElementById('done');
// checkbox.addEventListener('change', function(){
//     const isChecked = checkbox.checked;
//     const template = Handlebars.compile(document.getElementById('template').innerHTML);
//     const context = {checkbox: isChecked};
//     document.getElementById('output').innerHTML = html;
// });