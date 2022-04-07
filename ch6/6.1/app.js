const express = require('express');
const path = require('path');

const app = express();

app.set('port',process.env.PORT || 3000);

app.use((req,res,next) => {
    console.log('모든 요청에 실행하고 싶어요');
    next();
}, (req,res,next) => {
    throw new Error('에러가 났어요');
});

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/',(req,res) => {
    res.send('hello express');
});

app.get('/about',(req,res) => {
    res.send('hello express');
});

app.get('/jiwan',(req,res) => {
    res.send('hello jiwan');
});

app.get('/jiwang',(req,res) => {
    res.send('hello jiwan');
});

app.get('/category/java',(req,res) => {
    res.send('hello OK JAva');
});

app.get('/category/:name',(req,res) => {
    res.send(`hello ${req.params.name}`);
});

app.use((err,req,res,next) => {
    console.error(err);
    res.send('에러가 났습니다. ')
});

app.listen(app.get('port'), () => {
    console.log('익스프레스 서버 실행');
});