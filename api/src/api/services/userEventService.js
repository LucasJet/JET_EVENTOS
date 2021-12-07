const UserEventModel = require('../models/userEvents');
const AppError = require('../errors/appError');

const findAll = () => UserEventModel.findAll();

const findById = (id) => UserEventModel.findById(id);

const findOwnerUserEvent = async (id) => {
  const userEventData = await findById(id);

  return userEventData;
};

const remove = async (id, user, role) => {
  const response = await findOwneruserEvent(id);
  try {
    if (response.userId === user || role === 'admin') {
      return UserEventModel.removeById(id);
    }
   
    throw new AppError('Usuário não possui permissão para remover o registro.', 400);
  } catch (error) {
    throw new AppError('Usuário não possui permissão para remover o registro.', 400);
  }
};

const create = async (userEvent) => {
  if (error) {
    throw new AppError('Entradas incorretas. Tente novamente.', 400);
  }

  return UserEventModel.create(value);
};

const edit = async (id, userEvent, role) => {

  if (error) {
    throw new AppError('Entradas incorretas. Tente novamente.', 400);
  }

  const response = await findOwneruserEvent(id);

  if (response.userId === userEvent.userId || role === 'admin') {
    return UserEventModel.edit(id, userEvent);
  }
  throw new AppError('Usuário não possui permissão para editar o registro.', 400);
};

module.exports = {
  findAll,
  findById,
  findOwnerUserEvent,
  create,
  edit,
  remove,
};
