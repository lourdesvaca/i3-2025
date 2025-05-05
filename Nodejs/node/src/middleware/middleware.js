function middleware(req, res, next){
    console.log("Middleware executed.")
    next();

}

export { middleware }