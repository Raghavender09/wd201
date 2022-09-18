const http=require("http");
const fs=require("fs");



let homecontent="";
let projectcontent="";
let registrationcon="";

fs.readFile("home.html",(err,data)=>{
    if(err) throw err;
   homecontent=data;

    });
fs.readFile("project.html",(err,info)=>{
if(err) throw err;
projectcontent=info;
});

fs.readFile("registration.html",(err,info1)=>
{
    if(err) throw err;
    registrationcon=info1;

});


const args=require("minimist")(process.argv.slice(2));

http.createServer((request,res)=>{
    let url=request.url;
  
    
    res.writeHeader(200,{"content-type":"text/html"});
    switch(url)
    {
        case "/project.html":
            res.write(projectcontent);
            res.end();
            
            break;
        case "/registration.html":
            res.write(registrationcon);
            res.end();
            break;
        default:
            res.write(homecontent);
            res.end();
            break;
    }
    

    
}).listen(args);