import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  const securityKey = process.env.JWT_SECRET;
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token not Found" });
  }
  try {
    const verify = jwt.verify(token, securityKey);
    req.user = verify;
    next();
  } catch (error) {
    console.log(error);

    return res.status(401).json({ message: error.message });
  }
};
