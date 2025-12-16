import { PrismaClient } from "@prisma/client";
import "dotenv/config";

const url = process.env.DATABASE_URL;
if (!url) {
  throw new Error("DATABASE_URL is not set in environment variables");
}

export const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "error", "warn"]
      : ["error"],
});
