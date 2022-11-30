const { MongoClient } = require("mongodb");
const connectionUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = process.env.DB_NAME || 'sample-shop';


const init = async () => {
  let client = await MongoClient.connect(connectionUrl);
  console.log("connected to database: ", dbName);
  return client.db(dbName);
};


module.exports = { init };