const {UserService}=require('../services')
class UserController{
    async login(){
       try{
            var data={
                correo_electronico:'eceballos@pos.cloud.com.gt',
                contrasena: '#manager21'
            }
            var resp=await UserService.auth(data);
            if(typeof resp=='object'){
                if(resp.success===false){
                    var respLogout=await UserService.logout(resp.data);
                    if(respLogout){
                        resp=await UserService.auth(data);
                    }
                }
            }
            
            return resp.data.token.authorization;
       }
       catch($e){
           console.log($e)
           return null;
       }

        
    }
}
module.exports=new UserController()