export const signupSchema = (creds) => {
    const {firstName, lastName, email, password, confirmPassword} = creds;
    if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '') return {isValid: false, msg: 'Please fill the values!'}
    else if (!/@/.test(email) || !/\.(com|co)$/.test(email)) {
        return {isValid: false, msg: 'Please enter a valid email address!'}
    }
    else if (password.length < 7) {
        return {isValid: false, msg: 'Password length should be atleast 7 characters!'}
    }
    else if (password !== confirmPassword) {
        return {isValid: false, msg: 'Passwords do not match!'}
    }
}