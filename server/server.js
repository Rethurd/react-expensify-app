const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname,'..','public');
const port = process.env.PORT || 3000; // this is for heroku to know which port to use

app.use(express.static(publicPath));

// if we refresh on /create, make it actually work (how?)
app.get('*',(req,res)=>{
    res.sendFile(path.join(publicPath,'index.html'));
});

app.listen(port,()=>{
    console.log('Server is up!');
})