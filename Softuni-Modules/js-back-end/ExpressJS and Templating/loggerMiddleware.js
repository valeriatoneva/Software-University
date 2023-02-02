module.exports = (req, res, next) => {
    console.log(`
    Req url: ${req.url} 
    `)
    next()
}