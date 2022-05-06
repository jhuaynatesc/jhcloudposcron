const { default: axios } = require("axios");

const {SapService}= require('../services');
const UserController = require("./User.controller");
class SapController{
    async descargaMateriales(){
        try{
            var token=await UserController.login();
            console.log("sap descarga Materiales")
            var resp=await SapService.descargaMateriales(token,{});
            if(typeof resp=='object'){
                if(resp.succes===false){
                    throw resp;
                }
            }
            await this.sendSlack(JSON.stringify(resp.msg))
            // await this.descargaInventario(token)
            // await this.descargaSap(token)

        }
        catch($e){
            
            var error=JSON.stringify($e||'error descarga inventario')
            this.sendSlack(error)
        }
    }
    async descargaInventario(token){
        try{
            console.log("sap descarga Inventario")

            var resp=await SapService.descargaInventario(token,{});
            if(typeof resp=='object'){
                if(resp.succes===false){
                    throw resp;
                }
            }
            
            this.sendSlack(JSON.stringify(resp.msg))

        }
        catch($e){
            
            var error=JSON.stringify($e||'error descarga inventario')
            this.sendSlack(error)
        }
    }
    async descargaSap(token){
        try{
            console.log("sap descarga")
            var resp=await SapService.descargaMateriales(token,{});
            // var resp=await SapService.descargaInventario(token,{});
            if(typeof resp=='object'){
                if(resp.succes===false){
                    throw resp;
                }
            }
            
            this.sendSlack(JSON.stringify(resp))

        }
        catch($e){
            
            var error=JSON.stringify($e||'error descarga inventario')
            this.sendSlack(error)
        }
    }
    async sendSlack(message){
        try {
            console.log(message)
            const web =await axios.post(process.env.SLACK_URL,{
               "text":message
            });
        } catch (error) {
            console.log(error);
        }
        
    }
    
}
module.exports=new SapController()