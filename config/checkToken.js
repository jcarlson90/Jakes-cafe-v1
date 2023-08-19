// I have a token in the header

// I need to varify if this token is valid

// If its valid I need to set the logged in user for the req, res cycle

/*

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
}*/
const jwt = require('jsonwebtoken')
module.exports = function (req, res, next) {
  // Check for the token being sent in a header or a query parameter
  let token = req.get('Authorization') || req.query.token
  if (token) {
    token = token.replace('Bearer ', '')
    // Check if token is valid and not expired
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
      req.user = err ? null : decoded.user
      // Can remove this...
      // If your app doesn't care
      req.exp = err ? null : new Date(decoded.exp * 1000)
    })
    return next()
  } else {
    // No token was sent
    req.user = null
    return next()
  }
}






