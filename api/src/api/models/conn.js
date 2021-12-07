const { MongoClient } = require('mongodb');

const URI = 'mongodb+srv://aula_de_quarta:FnpCFG9Xm6WQhWT@cluster0.y6sy9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const URI = 'mongodb+srv://jet_admin:<jetadmin123>@cluster0.bzecf.mongodb.net/JET?retryWrites=true&w=majority';

let db = null;
let conn = null;

const connection = async () => {
  if (db) return db;
  try {
    conn = await MongoClient.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    db = conn.db('JET');
    return db;
  } catch (error) {
    console.log(error.message);
    process.exit(0);
  }
};

const close = () => {
  if (conn) {
    conn.close();
    db = null;
    conn = null;
  }
};

module.exports = {
  connection,
  close,
};
