const submit = document.getElementById('submit');
const search = document.getElementById('search');
const edit = document.getElementById('edit');
const del = document.getElementById('delete');

//This function works like Micah's but with less fields
async function employeeHandler(event) {
    event.preventDefault()
    
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;

    if (first_name == "" || last_name == "") {
        window.alert("Please, input required fields before adding employee");
    } else {
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
}

async function searcher(event) {
    event.preventDefault();
    const id = document.getElementById('selection').value;
    const employees = await fetch(`/api/employees`).then((response) => {return response.JSON});
    
    console.log(employees);

    employees.forEach((employee) => 
        {if (Number(employee.employee_id) == value) {
            document.getElementById('ID').innerHTML = employee.employee_id;
            document.getElementById('First name').innerHTML = employee.first_name;
            document.getElementById('Last name').innerHTML = employee.last_name;
        }}
    );
}

async function destroyer(event) {
    event.preventDefault();
    const id = document.getElementById('selection').value;
}

async function editor(event) {
    event.preventDefault();
    const id = document.getElementById('selection').value;
}

submit.addEventListener('click', employeeHandler);
search.addEventListener('click', searcher);
del.addEventListener('click', employeeHandler);
edit.addEventListener('click', employeeHandler);