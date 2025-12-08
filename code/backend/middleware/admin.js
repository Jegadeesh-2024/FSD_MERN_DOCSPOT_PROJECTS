const admin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.json({ message: "Access Denied" });
  }
  next();
};

module.exports = admin;
