const jwt = require('jsonwebtoken');

module.exports = (req,res,next) =>{
    const token = req.header('auth-token');
    if(!token){
        return res.json({error:'Access Denied'})
    }else{
        try{
            const verified = jwt.verify(token,process.env.TOKEN_SECRET);
            req.user = verified;
            
            next();
        }catch(err){
            res.json({error:'Access Denied , Please Login '});

        }
    }
}

