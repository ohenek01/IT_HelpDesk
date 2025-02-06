const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  let token = req.header("Authorization"); // Get token from request headers

  console.log("Raw Authorization Header:", token);

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    // Remove "Bearer " prefix if included
    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
    }

    console.log("Extracted Token:", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    console.log("Decoded Token:", decoded);

    req.user = decoded; // Attach user data to request
    next(); // Proceed to the next middleware/route
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = authMiddleware;