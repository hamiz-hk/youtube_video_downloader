const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const path = require('path')
const ejs = require('ejs')
const app = express();
app.use(cors());
app.set("view engine", 'ejs')
app.set("views", path.join(__dirname,'public'))
app.use(express.static('public')) //ashir
app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});
app.get("/",(req,res)=>{
    res.render('index')
})
app.get('/download', (req,res) => {
var URL = req.query.URL;
res.header('Content-Disposition', 'attachment; filename="video.mp4"');
ytdl(URL, {
    format: 'mp4'
    }).pipe(res);
});