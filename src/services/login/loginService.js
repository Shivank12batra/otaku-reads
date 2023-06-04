export const loginService = async(requestBody) => {
    const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    console.log(res)
    const data = await res.json()
    console.log(data)
    return data
}