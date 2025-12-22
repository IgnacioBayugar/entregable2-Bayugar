import app from "./app.js";
import connectMongo from "./config/mongo.js";

const PORT = process.env.PORT || 8080;

const startServer = async () => {
  await connectMongo();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();
