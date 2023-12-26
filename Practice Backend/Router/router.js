const express=require('express')

const controller=require('../Controller/controller')
const router=express.Router()

router.get('/hi',controller.hi)

module.exports=router