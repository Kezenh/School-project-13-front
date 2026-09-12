async function getUserDatas(token) {
    const requestOptions = {
        method: 'POST',
        headers: {
          "Authorization": "Bearer" + token
        }
    }
        
    return fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
    .then(response => response.json())
    .then(response => response.body)
    .catch(error => console.log("Error", error))
}

export default getUserDatas