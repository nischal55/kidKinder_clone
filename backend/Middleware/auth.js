const jwt = require('jsonwebtoken')

function checkAuthentication(req, res, next) {
    let token = req.headers.authorization?.replaceAll("Bearer ", "");
  
    if (token) {
      try {
        const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
  
        req.user = decodedUser;
        return next();
      } catch (err) {
        /*  if there is error in jwt token from client..
            let leave it as it is and our below code will handle.
        */
      }
    }
  
    return res.status(401).send({
      msg: "unauthenticated",
    });
  }

  module.exports = checkAuthentication;