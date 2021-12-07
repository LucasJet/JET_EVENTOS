const { ObjectId } = require('mongodb');
const { connection } = require('./conn');

const getUserEventsCollection = async () => {
  const conn = await connection();
  return conn.collection('userEvent');
};

const findAll = async () => {
  const UserEvents = await getUserEventsCollection();
  return UserEvents.find().toArray();
};

const findById = async (id) => {
  const UserEvent = await getUserEventsCollection();
  try {
    return UserEvent.findOne(ObjectId(id));
  } catch (err) {
    return false;
  } 
};

const create = async (UserEvent) => {
  const UserEvents = await getUserEventsCollection();

  const { UserEventId } = await UserEvents.insertOne(UserEvent);
  return { _id: UserEventId, ...UserEvent };
};

const edit = async (id, UserEvent) => {
  const UserEvents = await getUserEventsCollection();

  const updatedUserEvent = await UserEvents.findOneAndUpdate(
    { _id: ObjectId(id) },
    { $set: UserEvent },
    { returnOriginal: false },
  );
  return updatedUserEvent.value;
};

const removeById = async (id) => {
  const UserEvents = await getUserEventsCollection();
  const { deletedCount } = await UserEvents.deleteOne({ _id: ObjectId(id) });
  if (!deletedCount) throw new Error('Falha ao remover o registro.');
  return true;
};

module.exports = {
  findAll,
  findById,
  create,
  edit,
  removeById,
};
