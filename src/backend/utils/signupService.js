export const signupService = async(requestBody) => {
    const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    const data = await res.json()
    return data
}