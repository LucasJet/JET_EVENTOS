const UserEventModel = require('../models/userEvents');
const AppError = require('../errors/appError');

const findAll = () => UserEventModel.findAll();

const findById = (id) => UserEventModel.findById(id);

const findOwnerUserEvent = async (id) => {
  const userEventData = await findById(id);

  return userEventData;
};

const findStatusUserEvent = async (userId, eventId) => UserEventModel.findUserEvent(userId, eventId);

const remove = async (id, user, role) => {
  const response = await findOwnerUserEvent(id);
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
  return UserEventModel.create(userEvent);
};

const edit = async (id, userEvent, role) => {
  const response = await findOwnerUserEvent(id);
  
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
  findStatusUserEvent,
};
