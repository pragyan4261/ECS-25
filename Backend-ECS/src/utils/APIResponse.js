<<<<<<< HEAD
class APIResponse{
    constructor(statusCode,data,message="Success"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode<400
    }
}

export {APIResponse}
=======
class APIResponse{
    constructor(statusCode,data,message="Success"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode<400
    }
}

export {APIResponse}
>>>>>>> d7aa76d64fe0b6d3299a44becd680ebf0512e45f
