import dotenv from "dotenv";
 
dotenv.config();
 
export default {
  port: process.env.PORT || 3000,
  db: process.env.DB_CLIENT_URL,
};