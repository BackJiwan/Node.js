const express = require('express');

const app = express();

app.get('/' , (req,res) => {
    res.send('hello express');
}); //라우터 설정

app.listen(3000, () => {
    console.log('익스프레스 서버가 실행됩니다. ');
});

