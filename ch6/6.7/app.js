const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.set('port',process.env.PORT || 3000); //port 이름에 속성 3000부여

app.use(morgan('dev'));

app.use((req,res,next) => { //app.use 하위의 함수가 미들웨어 함수이다.
    console.log('기본 미들웨어 이후 next 진행');
    next();
})
app.get('/' , (req,res,next) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    //__dirname으로 현재 디렉토리의 경로를 모두 전달하고 그 뒤에 파일이름을 붙이는 형식으로 파일을 지정
    next('route');
},  (req,res) => {
    console.log('실행되지 않는부분 ')
}); //라우터 설정

app.get('/',(req,res) => {
    console.log('get / 요청에 대해서 next(\'route\')로  넘어온 라우터');
})

app.post('/',(req,res) => {
    res.send('hello express');
});

app.get('/category/nodejs', (req,res) => {
    res.send('hello nodejs');
})


app.get('/category/javascript', (req,res) => {
    res.send('hello javascript');
})

app.get('/category/:name',(req,res) => {
    res.send(`hello ${req.params.name}`);
}) //콜론뒤의 name을 value로 지정한다. 기본양식은 a : name 의 꼴이지만 key가 필요없기 때문 ?

app.get('/about', (req,res) => {
    res.send('hello express about');
})

app.use((req,res,next) => {
    res.status(404).send('404 에러입니다. (404처리 미들웨어)');
}) //다른 라우터들의 가장 아랫부분 + 에러처리 미들웨어의 윗부분

app.use((err,req,res,next) => {
    console.error(err)
    res.status(404).send('에러가 났습니다. (에러처리 미들웨어)');
})

app.listen(app.get('port'), () => {
    console.log('익스프레스 서버 최초 실행');
});

