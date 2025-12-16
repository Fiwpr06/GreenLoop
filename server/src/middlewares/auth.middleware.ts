import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET ?? "dev-secret";

// Kiểm tra hợp lệ của token và giải mã nó
const signPayload = (token: string) =>
  jwt.verify(token, JWT_SECRET) as {
    id: string;
    role: string;
    email: string;
  };

export const authMiddleware = (roles?: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Kiểm tra req có header Authorization không
    const authHeader = req.headers.authorization;

    // Check lại format chuẩn Bearer <token>
    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      // Giải mã token
      const decoded = signPayload(token);

      // Kiểm tra quyền
      if (roles && !roles.includes(decoded.role)) {
        return res.status(403).json({ error: "Forbidden" });
      }
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ error: "Invalid token" });
    }
  };
};
