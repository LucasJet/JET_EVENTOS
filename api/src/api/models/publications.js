const { ObjectId } = require('mongodb');
const { connection } = require('./conn');

const getPublicationCollection = async () => {
  const conn = await connection();
  return conn.collection('publication');
};

const findAll = async () => {
  const publication = await getPublicationCollection();
  return publication.find().toArray();
};

const findById = async (id) => {
  const publication = await getPublicationCollection();
  try {
    return publication.findOne(ObjectId(id));
  } catch (err) {
    return false;
  } 
};

const create = async (publication) => {
  const publications = await getPublicationCollection();

  const { publicationId } = await publications.insertOne(publication);
  return { _id: publicationId, ...publication };
};

const edit = async (id, publication) => {
  const publications = await getPublicationCollection();

  const updatedPublication = await publications.findOneAndUpdate(
    { _id: ObjectId(id) },
    { $set: publication },
    { returnOriginal: false },
  );
  return updatedPublication.value;
};

const removeById = async (id) => {
  const publications = await getPublicationCollection();
  const { deletedCount } = await publications.deleteOne({ _id: ObjectId(id) });
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
