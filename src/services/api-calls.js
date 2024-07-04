
export async function LoginMe (credentials) {

    let rawData = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: credentials.name,
          password: credentials.password,
          expiresInMins: 30, // optional, defaults to 60
        })
      })
      
    let data = await rawData.json()
    return data;
}

