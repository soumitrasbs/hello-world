
const express=require ('express');  
const path =require ('path');
const app =express();
const cors= require ('cors');
app.use(cors());



const port=process.env.PORT||3000;

app.use(express.static(path.join(__dirname,"./dist/hello-world")))
app.use(express.static("index.html",{root:"dist/hello-world"}))






// app.get('/',(req,res)=>{res.send('server working now')})





try {
    app.listen( port,() => {
        console.log("server connection is sucessfull! Running PORT: ",  port);
    })
} catch (e) {
    console.log(`Server Runtime Error:  ${e}`);
}

