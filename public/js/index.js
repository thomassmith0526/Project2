async function clientHandler(event) {
    event.preventDefault()
    // console.log('shhh micah')
    
    const first_name = document.getElementById('first_name').value;

    const last_name = document.getElementById('last_name').value;
    const location = document.getElementById('location').value;
    const task = document.getElementById('task').value
    //Added this to handle empty fields
    if (first_name == "" || last_name == "") {
        window.alert("Please, input required fields before adding client");
        return;
    } 
    
    if (location == "") {
        window.alert("Please, input required fields before adding client");
        return;
    }

    const response = await fetch(`api/clients`, {
        method: 'POST',
        body: JSON.stringify({
            first_name,
            last_name,
            location,
        }),
      header: {  'Accept': 'application/json',
        'Content-type': 'application/json'}
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to add Client')
    }

}


addEventListener('submit', clientHandler)
document.querySelector('.form-group')
    


