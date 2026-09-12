async function getSignInToken(email, password) {
  const mail = email.value
  const word = password.value
  const requestOptions = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({
      "email": mail,
      "password": word
    })  
  }

  return fetch('http://localhost:3001/api/v1/user/login', requestOptions)
  .then(response => response.json())
  .then(response => response.body.token)
.catch(error => {
    console.log("Error :", error)
    document.getElementById("error").innerText = `Erreur : ${error}`
  })
}

export default getSignInToken