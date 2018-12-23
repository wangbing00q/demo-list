module.exports=(ctx,next)=>{
    let user = ctx.session.user
    if(user){
        next()
    }else{
        ctx.redirect("/signin")
    }
}