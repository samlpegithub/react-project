const jwt = require("jsonwebtoken");

const middleware = (req, res, next) => {
  const token = req.header("token");
  if (!token) {
    return res.json("Login using valid credential ");
  }

  const Key = "awaismalik";
  let verifytoken = jwt.verify(token, Key);

  if (!verifytoken) {
    return res.json("Login using valid credential ");
  }

//   const id={
//     user:user.id
// }

  // console.log(verifytoken.user)
  req.user=verifytoken.user
  next()
};
module.exports = middleware;
