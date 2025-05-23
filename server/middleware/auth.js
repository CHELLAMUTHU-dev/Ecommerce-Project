const jwt     = require('jsonwebtoken');

 const authMiddleware = (req,res,next) => {
   const token = req.headers['authorization'];
       if(!token) return res.status(401).json({error:'Access Denied'});
       try {
            const jwtToken = jwt.verify(token.split(' ')[1] ,process.env.JWT_SECRET )
           req.user = jwtToken;
           next();
   
       } catch (error) {
           res.status(400).json({error:'Invalid Token'});
           
       }
}

module.exports = authMiddleware