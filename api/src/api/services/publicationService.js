const PublicationModel = require('../models/publications');
const PublicationSchema = require('../schemas/publicationSchema');
const AppError = require('../errors/appError');

const findAll = () => PublicationModel.findAll();

const findAllPagination = (skip, limit) => PublicationModel.findAllPagination(skip, limit);

const findById = (id) => PublicationModel.findById(id);

const findOwnerPublication = async (id) => {
  const PublicationData = await findById(id);

  return PublicationData;
};

const remove = async (id, user, role) => {
  const response = await findOwnerPublication(id);
  try {
    if (response.userId === user || role === 'admin') {
      return PublicationModel.removeById(id);
    }
   
    throw new AppError('Usuário não possui permissão para remover o registro.', 400);
  } catch (error) {
    throw new AppError('Usuário não possui permissão para remover o registro.', 400);
  }
};

const create = async (publication) => {
  const { value, error } = PublicationSchema.validate(publication);

  console.log(error);
  if (error) {
    throw new AppError('Entradas incorretas. Tente novamente.', 400);
  }

  return PublicationModel.create(value);
};

const edit = async (id, publication, role) => {
  const { error } = PublicationSchema.validate(publication);

  if (error) {
    throw new AppError('Entradas incorretas. Tente novamente.', 400);
  }

  const response = await findOwnerPublication(id);

  if (response.userId === publication.userId || role === 'admin') {
    return PublicationModel.edit(id, publication);
  }
  throw new AppError('Usuário não possui permissão para editar o registro.', 400);
};

module.exports = {
  findAll,
  findById,
  findOwnerPublication,
  create,
  edit,
  remove,
  findAllPagination,
};
