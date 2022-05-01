const express = require('express');

const app = express();

app.set('port',process.env.PORT || 3000); //port 이름에 속성 3000부여
app.get('/' , (req,res) => {
    res.send('hello express');
}); //라우터 설정

app.post('/',(req,res) => {
    res.send('hello express');
});

app.get('/about', (req,res) => {
    res.send('hello express about');
})

app.listen(app.get('port'), () => {
    console.log('익스프레스 서버가 실행됩니다. ');
});

