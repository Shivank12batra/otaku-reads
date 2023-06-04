export const loginSchema = (creds) => {
    const {email, password} = creds
    if (email === '' || password === '') return {isValid: false, msg: 'Please enter valid credentials!'}
    else if (!/@/.test(email) || !/\.(com|co)$/.test(email)) {
        return {isValid: false, msg: 'Please enter a valid email address!'}
    }
    return {isValid: true, msg: ""}
}