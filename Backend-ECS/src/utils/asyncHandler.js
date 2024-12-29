<<<<<<< HEAD
const asyncHandler=(requestHandler)=>{
    return (req,res,next)=>{
       Promise.resolve(requestHandler(req,res,next))
       .catch((err)=>next(err))
    }
}
=======
const asyncHandler=(requestHandler)=>{
    return (req,res,next)=>{
       Promise.resolve(requestHandler(req,res,next))
       .catch((err)=>next(err))
    }
}
>>>>>>> d7aa76d64fe0b6d3299a44becd680ebf0512e45f
export {asyncHandler}