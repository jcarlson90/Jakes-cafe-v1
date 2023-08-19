/*module.exports = (req, res, next) => {
    if (req.user) return next() 
    res.status(401).json({ msg: 'unauthorized'})
}*/

module.exports = function (req, res, next) {
    if (!req.user) return res.status(401).json('Unauthorized')
    next()
  }