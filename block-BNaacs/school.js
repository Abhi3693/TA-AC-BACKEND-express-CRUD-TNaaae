let express = require("express");
let path = require("path");

let school = express();
school.use(express.json());
school.use(express.urlencoded());

school.set("view engine", "ejs");
school.set("views", path.join(__dirname , "views"));

school.use((req,res,next)=>{
    res.locals.message = "This is local render";
    next();
})

school.get("/index",(req,res,next)=>{
    res.render("index");
    next();
});

school.get("/about",(req,res,next)=>{
    res.render("about");
    next();
});

school.post("/", (req,res)=>{
    let user = req.body;
    res.render("index", {user:user});
});

school.use((req,res,next)=>{
    res.send("<h1>Page Not Found:404</h1>");
    next();
});

school.use((err,req,res,next)=>{
    res.send(err);
    next();
});

school.listen(1233);