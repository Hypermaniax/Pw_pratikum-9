const express =require('express');
const app = express()

app.get('/',(error,response)=>{
    response.send('hellow')
})

app.get('/profile',(error,response)=>{
    response.send('this is profile page')
})

app.get('/help',(error,response)=>{
    response.send('this is help page')
})

app.listen(3000)