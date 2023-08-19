// I have a token in the header

// I need to varify if this token is valid

// If its valid I need to set the logged in user for the req, res cycle

const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    let token = req.get('Authoriztion')
    if (token) {
       token = token.split(' ')[1]
       jwt.verify(token, process.env.SECRET, (err, decoded) => {
         req.user = err ? null : decoded.user
         req.exp = err ? null : new Date(decoded.exp * 1000)
       }) 
       return next()
    } else {
        req.user = null
        return next()
    }
}