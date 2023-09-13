

exports.getRegisterPage = (req, res, next) => {
    res.render('auth/register', {
        pageTitle: 'Register',
        path: '/register'
    })
}

exports.getLoginPage = (req, res, next) => {
    res.render('auth/login', {
        pageTitle: 'Login',
        path: '/login'
    })
}


exports.register = (req, res, next) => {
    res.send('OK')
}

exports.login = (req, res, next) => {
    res.send('OK')
}