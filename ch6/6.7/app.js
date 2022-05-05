const express = require('express');
const path = require('path');

const app = express();

app.set('port',process.env.PORT || 3000); //port 이름에 속성 3000부여

app.use((req,res,next) => { //app.use 하위의 함수가 미들웨어 함수이다.
    console.log('모든 요청에 실행하고 싶어요 ');
    next();
})
app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    //__dirname으로 현재 디렉토리의 경로를 모두 전달하고 그 뒤에 파일이름을 붙이는 형식으로 파일을 지정
}); //라우터 설정

app.post('/',(req,res) => {
    res.send('hello express');
});

app.get('/category/nodejs', (req,res) => {
    res.send('hello nodejs');
})

app.get('/category/:name',(req,res) => {
    res.send(`hello ${req.params.name}`);
}) //콜론뒤의 name을 value로 지정한다. 기본양식은 a : name 의 꼴이지만 key가 필요없기 때문 ?

app.get('/about', (req,res) => {
    res.send('hello express about');
})

app.listen(app.get('port'), () => {
    console.log('익스프레스 서버가 실행됩니다. ');
});

