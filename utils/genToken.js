const jwt = require("jsonwebtoken")
const genToken=(_id)=>{
    const token_id = jwt.sign({_id},process.env.SECRET_PASS,{expiresIn:"20d"})
    return token_id
    
}
module.exports=genToken