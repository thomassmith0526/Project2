const jobFields = document.getElementsByClassName('JobField')

async function getData() {
    const url = "http://localhost:3001/api/jobs";

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
    
  
    for (let i = 0; i < jobFields.length; i++) {
      console.log(jobFields[i])
      let jobField = jobFields[i].innerHTML
       let element = ` 
<add-to-calendar-button
  name="Title"
  options="'Apple','Google'"
  location="World Wide Web"
  startDate="2024-07-27"
  endDate="2024-07-27"
  startTime="10:15"
  endTime="23:30"
  timeZone="America/Los_Angeles"
></add-to-calendar-button>
      `
      jobFields[i].innerHTML = jobFields[i].innerHTML + element
      // console.log(jobFields[i])
    }
  }
// getData()