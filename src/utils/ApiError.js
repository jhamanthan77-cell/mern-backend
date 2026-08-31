class ApiError extends error{
    constructor (
statuscode,  
mesaage="something went wrong",
error=[],
stack=""
    ){
  super(mesaage)
  this.statuscode=statuscode
  this.data=null
  this.message= this.message
  this.success= false;
  this.error=errors

    
    if(stack){
        this.stack= stack
    } 
    else{
        error.captureStackTrace(this,this.constructor)
    }
   
}
}
export{ApiError}