export const getJobs = async () => {
    let url = "https://localhost:44368/api/jobs";
    try {
      let response = await fetch(url, {
        method: "GET",
        headers: ({
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            "Content-Type": "application/json"
        })
      });
  
      if (response.ok) {
        const data = await response.json();
        //alert(JSON.stringify(data));
        return data;
      } else {
        alert("Server returned: " + response.statusText);
      }
    } catch (err) {
      alert("Error: " + err);
    }
    return false;
  }