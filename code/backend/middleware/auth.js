// const jwt = require("jsonwebtoken");

// const auth = (req, res, next) => {
//   const token = req.headers["authorization"];

//   if (!token) return res.json({ message: "No token found" });

//   try {
//     const decoded = jwt.verify(token, "secretkey");
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.json({ message: "Invalid token" });
//   }
// };

// module.exports = auth;
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  let token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "No token found" });
  }

  // If token is like "Bearer abc.def.ghi"
  if (token.startsWith("Bearer ")) {
    token = token.split(" ")[1];
  }

  try {
    const decoded = jwt.verify(token, "secretkey");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = auth;

