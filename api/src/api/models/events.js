const { ObjectId } = require('mongodb');
const { connection } = require('./conn');

const getEventsCollection = async () => {
  const conn = await connection();
  return conn.collection('event');
};

const findAll = async () => {
  const events = await getEventsCollection();
  return events.find().toArray();
};

const findById = async (id) => {
  const event = await getEventsCollection();
  try {
    return event.findOne(ObjectId(id));
  } catch (err) {
    return false;
  } 
};

const create = async (event) => {
  const events = await getEventsCollection();

  console.log(events);

  const { eventId } = await events.insertOne(event);
  return { _id: eventId, ...event };
};

const edit = async (id, event) => {
  const events = await getEventsCollection();

  const updatedEvent = await events.findOneAndUpdate(
    { _id: ObjectId(id) },
    { $set: event },
    { returnOriginal: false },
  );
  return updatedEvent.value;
};

const createImage = async (id, image, user) => {
  const events = await getEventsCollection();

  const updatedEventImage = await events.findOneAndUpdate(
    { _id: ObjectId(id) },
    { $set: {
      image,
      userId: user,
    } },
    { returnOriginal: false },
  );
  
  return updatedEventImage.value;
};

const removeById = async (id) => {
  const events = await getEventsCollection();
  const { deletedCount } = await events.deleteOne({ _id: ObjectId(id) });
  if (!deletedCount) throw new Error('Falha ao remover o registro.');
  return true;
};

module.exports = {
  findAll,
  findById,
  create,
  edit,
  createImage,
  removeById,
};
