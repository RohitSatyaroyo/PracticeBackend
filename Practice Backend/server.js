const express=require('express')

const app=express()

const router=require('./Router/router')

app.use('/link',router)

app.get('/hi',async(req,res)=>{
    res.json({message:'hi'})
})


app.listen(8081,()=>console.log('server running '))


