const request=require('./config')
class SapService{
    async descargaInventario(token,data){
        try{
            var req=request(token)
            var resp=await req({
                url:'/web/cmi/descarga-inventario-materiales',
                method:'post',
                data:data,
                timeout:60000,
            })
            
            return resp.data;
        }
        catch($e){
            return $e.response.data;
        }
    }
    async descargaMateriales(token,data){
        try{
            var req=request(token)
            var resp=await req({
                url:'/web/cmi/descarga-materiales-sap',
                method:'post',
                data:data,
                timeout:60000,
            })
            
            return resp.data;
        }
        catch($e){
            return $e.response.data;
        }
    }
    
}
module.exports=new SapService()