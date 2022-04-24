const express = require('express');

const app = express();

app.set('port',3000); //port 이름에 속성 3000부여

app.get('/' , (req,res) => {
    res.send('hello express');
}); //라우터 설정

app.get('/about', (req,res) => {
    res.send('hello express about');
})

app.get('/a', (req,res) => {
    res.send('hello express about');
})



app.listen(app.get('port'), () => {
    console.log('익스프레스 서버가 실행됩니다. ');
});

