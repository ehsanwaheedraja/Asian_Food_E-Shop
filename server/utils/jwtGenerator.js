const jwt = require("jsonwebtoken");
if (process.env.NODE_ENV!=="production") {
  require("dotenv").config();
}


function jwtGenerator(user) {
  const payload = {
    user: {
      email: user.user_email,
      id: user.user_id,
      name: user.user_firstname
    }
  };
  
//the code below was the code written from the tutorial
//Look at file server/routes/dashboard.js to see the change code for this code
  
//   function jwtGenerator(user_id) {
//   const payload = {
//     user: user_id
//   };

  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1h" });
}

module.exports = jwtGenerator;
