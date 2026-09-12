async function updateProfile(token, firstName, lastName) {
    const requestOptions = {
        method: 'PUT',
        headers: {
          "Authorization": "Bearer" + token,
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({
            "firstName": firstName,
            "lastName": lastName
          })
    }
        
    return fetch('https://school-project-13-back.onrender.com/api/v1/user/profile', requestOptions)
    .then(response => response.json())
    .then(response => response.body)
    .catch(error => console.log("Error", error))
}

export default updateProfile