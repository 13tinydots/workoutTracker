import { MongoClient } from "mongodb";
import config from "./config.js";
 
const client = new MongoClient(config.db);
 
client
  .connect()
  .then(() => {
    console.info("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error starting MongoDB Client");
    process.exit(1);
  });
 
process.on("SIGINT", () => {
  client.close().then(() => {
    console.info("MongoDB connection closed");
    process.exit(0);
  });
});
 
export default client;