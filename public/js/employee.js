const submit = document.getElementById('submit');
const search = document.getElementById('search');
const edit = document.getElementById('edit');
const del = document.getElementById('delete');

//This function works like Micah's but with less fields
async function employeeHandler(event) {
    event.preventDefault()
    
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const employee_id = document.getElementById('selection').length + 1;

    if (first_name == "" || last_name == "") {
        window.alert("Please, input required fields before adding employee");
    } else {
        const response = await fetch(`api/employees`, {
            method: 'POST',
            body: JSON.stringify({
                employee_id,
                first_name,
                last_name,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        document.location.replace('/employee');
    }
}

async function searcher(event) {
    event.preventDefault();
    const id = document.getElementById('selection').value;

    const employees = await fetch(`/api/employees`).then((response) => {return response.json()});

    employees.forEach((employee) => 
        {if (Number(employee.employee_id) == id) {
            document.getElementById('ID').innerHTML = `ID: ${employee.employee_id}/`;
            document.getElementById('First name').innerHTML = `First name: ${employee.first_name}/`;
            document.getElementById('Last name').innerHTML = `Last name: ${employee.last_name}`;
        }}
    );
}

async function destroyer(event) {
    event.preventDefault();
    const id = document.getElementById('selection').value;

    await fetch(`api/employees/${id}`, 
        {method: 'DELETE'},
    );
    document.location.replace('/employee');
}

async function editor(event) {
    event.preventDefault();
    const id = document.getElementById('selection').value;
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;

    await fetch(`api/employees/${id}`, 
        {method: 'PUT',
        body: JSON.stringify({
            first_name, last_name,
        }),
        headers: {
            'Content-Type': 'application/json' 
        },
        },
    );

}

submit.addEventListener('click', employeeHandler);
search.addEventListener('click', searcher);
del.addEventListener('click', destroyer);
edit.addEventListener('click', editor);