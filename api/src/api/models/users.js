const { ObjectId } = require('mongodb');
const { connection } = require('./conn');

const getUsersCollection = async () => {
  const conn = await connection();
  return conn.collection('user');
};

const findAll = async () => {
  const users = await getUsersCollection();
  return users.find().toArray();
};

const findByEmail = async (email) => {
  const users = await getUsersCollection();
  return users.findOne({ email });
};

const findByRole = async (role) => {
  const users = await findAll();
  const result = users.filter(element => element.role == role );

  if (result.length > 0){
    return result;
  }else{
    return false;
  }
};

const create = async (user) => {
  const users = await getUsersCollection();

  const { userId } = await users.insertOne(user);
  return { _id: userId, ...user };
};

const edit = async (id, user) => {
  const users = await getUsersCollection();

  const updatedUser = await users.findOneAndUpdate(
    { _id: ObjectId(id) },
    { $set: user },
    { returnOriginal: false },
  );
  return updatedUser.value;
};

const findById = async (id) => {
  const users = await getUsersCollection();
  try {
    return users.findOne(ObjectId(id));
  } catch (err) {
    return false;
  }
};

module.exports = {
  findAll,
  findByEmail,
  create,
  findByRole,
  edit,
  findById,
};
