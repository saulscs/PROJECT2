exports.isLogged = (req,res,next) => {
    if (!req.isAuthenticated())
    return res.redirect("/profile")
    next()
}

exports.isAdmin = (req,res,next) => {
    if(req.user.role !== "ADMIN"){
        req.logOut()
        req.redirect("/login")
    } else {
        next()
    }
}