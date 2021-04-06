const users = [
    {
        email: 'john@doe.com',
        password: 'john1',
        isLog: false
    },
    {
        email: 'jane@doe.com',
        password: 'jane2',
        isLog: false
    }
]

/*
* @param {String} email
* @param {String} password
* @return {?Object}
*/
function login(email, password) {
    return users.find(user => user.email === email && user.password === password) || null
}

export default { login };