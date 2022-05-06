const request=require('./config')
class UserService{
    async auth(data){
        try{
            var req=request()
            var resp=await req({
                url:'/login',
                method:'post',
                data:data
            })
            return resp.data;
        }
        catch($e){
            return $e.response.data;
        }
    }
    async logout(id){
        try{
            var req=request()
            var resp=await req({
                url:'/logout-of-all-devices',
                method:'post',
                data:{id_new_user:id}
            })
            return resp.data;
        }
        catch($e){
            return null;
        }
    }
    
    
}
module.exports=new UserService()