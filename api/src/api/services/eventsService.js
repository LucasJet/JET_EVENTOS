const EventModel = require('../models/events');
const EventSchema = require('../schemas/eventSchema');
const AppError = require('../errors/appError');

const findAll = () => EventModel.findAll();
const findAllPagination = (skip, limit) => EventModel.findAllPagination(skip,limit);

const findById = (id) => EventModel.findById(id);

const findOwnerEvent = async (id) => {
  const EventData = await findById(id);

  return EventData;
};

const remove = async (id, user, role) => {
  const response = await findOwnerEvent(id);
  try {
    if (response.userId === user || role === 'admin') {
      return EventModel.removeById(id);
    }
   
    throw new AppError('Usuário não possui permissão para remover o registro.', 400);
  } catch (error) {
    throw new AppError('Usuário não possui permissão para remover o registro.', 400);
  }
};

const create = async (event) => {
  const { value, error } = EventSchema.validate(event);

  if (error) {
    throw new AppError('Entradas incorretas. Tente novamente.', 400);
  }

  return EventModel.create(value);
};

const edit = async (id, event, role) => {
  const { error } = EventSchema.validate(event);

  if (error) {
    throw new AppError('Entradas incorretas. Tente novamente.', 400);
  }

  const response = await findOwnerEvent(id);

  if (response.userId === event.userId || role === 'admin') {
    return EventModel.edit(id, event);
  }
  throw new AppError('Usuário não possui permissão para editar o registro.', 400);
};

const createImage = async (id, image, user, role) => {
  const response = await findOwnerEvent(id);
  if (response.userId === user || role === 'admin') {
    return EventModel.createImage(id, image, user);
  }
  throw new AppError('Usuário não possui permissão para editar o registro.', 400);
};

const calculateDiffTime = (start, end) => {
  start = start.split(":");
  end = end.split(":");
  var startDate = new Date(0, 0, 0, start[0], start[1], 0);
  var endDate = new Date(0, 0, 0, end[0], end[1], 0);
  var diff = endDate.getTime() - startDate.getTime();
  var hours = Math.floor(diff / 1000 / 60 / 60);
  diff -= hours * 1000 * 60 * 60;
  var minutes = Math.floor(diff / 1000 / 60);

  // If using time pickers with 24 hours format, add the below line get exact hours
  if (hours < 0)
    hours = hours + 24;
  
  hours =+ hours * 60;
  return hours+minutes;
};


module.exports = {
  findAll,
  findById,
  findOwnerEvent,
  create,
  edit,
  remove,
  createImage,
  calculateDiffTime,
  findAllPagination,
};
