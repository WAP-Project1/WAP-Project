var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
    res.render("login.ejs",{title:"Login"});
})
router.get("/signup",(req,res)=>{
    res.render("signup.ejs",{title:"Sign-Up"});
})
router.post("/postlogin",(req,res)=>{
    res.redirect("/homepage")
})
router.post("/postsignup",(req,res)=>{
    res.redirect("/login")
})

module.exports = router;
