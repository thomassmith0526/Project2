async function getData() {
    // localhost/api/employees
    const url = "http://localhost:3001/api/employees";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();

      useData(json)
      
    } catch (error) {
      console.error(error.message);
    }
  }
  
function useData(data) {
    console.log(data);



}




getData()