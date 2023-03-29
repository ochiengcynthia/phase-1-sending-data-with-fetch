// Add your code here
function submitData(name, email) {
    let formData = {
      name: name,
      email: email
    };
    
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
    
    return fetch("http://localhost:3000/users", configObj)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.body.innerHTML = data.id;
      })
      .catch(error => {
        console.log(error.message);
        document.body.innerHTML = error.message;
      });
  }
