const cron= require('node-cron')
const {SapController}=require('./controllers')
require('dotenv').config();

cron.schedule('*/20 * * * * *',()=>{
    SapController.descargaMateriales()
})