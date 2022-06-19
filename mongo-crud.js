let MongoClient = require("mongodb").MongoClient;
const mongodb_uri = "mongodb://admin:password@localhost:27017";
const databaseName = "users";
let crud = {
  save: function (user) {
    try {
      MongoClient.connect(mongodb_uri, (err, client) => {
        if (err) throw err;
        let db = client.db(databaseName);
        let usersCollection = db.collection("mailing-details");
        usersCollection.insertOne(user);
      });
    } catch (e) {
      throw e;
    }
  },
  read: async function (res) {
    //This an asyncrhonous function
    try {
      await MongoClient.connect(mongodb_uri, (err, client) => {
        if (err) throw err;
        let db = client.db(databaseName);
        let usersCollection = db.collection("mailing-details");
        usersCollection.find({}).toArray((error, result) => {
          if (error) throw error;
          res.render(__dirname + "/views/users.ejs", { users: result });
        });
      });
    } catch (e) {}
  },
};
module.exports = crud;
