const express = require('express');
const path = require('path');

const app = express();

app.set('port',process.env.PORT || 3000); //port 이름에 속성 3000부여
app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    //__dirname으로 현재 디렉토리의 경로를 모두 전달하고 그 뒤에 파일이름을 붙이는 형식으로
    //파일을 지정해 주는 것이다.
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

