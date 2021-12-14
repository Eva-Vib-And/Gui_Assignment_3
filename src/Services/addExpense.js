export const addNewExpense = async (form) => {
    await fetch("https://localhost:44368/api/expenses", {
        method: "POST",
        body: JSON.stringify(form),
        credentials:'include',
        headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
                "Content-Type": "application/json"
            }
        
    }).then(responseJSON =>{
        this.response = responseJSON
    }).catch(error => alert("Something bad happend: " + error)) 
}