<<<<<<< HEAD
class APIError extends Error{
    constructor(
        statusCode,
        message="Something Went Wrong",
        error=[],
        stack="",
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success= false
        this.error=error;
        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}
export {APIError}
=======
class APIError extends Error{
    constructor(
        statusCode,
        message="Something Went Wrong",
        error=[],
        stack="",
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success= false
        this.error=error;
        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}
export {APIError}
>>>>>>> d7aa76d64fe0b6d3299a44becd680ebf0512e45f
