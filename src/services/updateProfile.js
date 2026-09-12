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
        
    return fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
    .then(response => response.json())
    .then(response => response.body)
    .catch(error => console.log("Error", error))
}

export default updateProfile