const UserModel = require('../models/users');
const UserSchema = require('../schemas/usersSchema');
const UsersAdminSchema = require('../schemas/usersAdminSchema');
const AppError = require('../errors/appError');

const findAll = () => UserModel.findAll();

const findByEmail = async (email) => UserModel.findByEmail(email);

const findByRole = async (role) => UserModel.findByRole(role);

const findById = (id) => UserModel.findById(id);

const findOwnerEvent = async (id) => {
  const UserData = await findById(id);

  return UserData;
};

const create = async (user) => {
  const { value, error } = UserSchema.validate(user);
  if (error) {
    throw new AppError('Entradas incorretas. Tente novamente.', 400);
  }

  const userEmail = await findByEmail(user.email);
  if (userEmail) {
      throw new AppError('E-mail já registrado.', 409);
  }

  return UserModel.create(value);
};

const createAdmin = async (user, roleAdmin) => {
  if (roleAdmin !== 'admin') throw new AppError('Apenas administradores podem criar novos administradores', 403);
  
  const { value, error } = UsersAdminSchema.validate(user);
  if (error) {
    throw new AppError('Entradas incorretas. Tente novamente.', 400);
  }
  
  const userEmail = await findByEmail(user.email);
  if (userEmail) {
    throw new AppError('E-mail já registrado', 409);
  }

  return UserModel.create(value);
};

const edit = async (id, user, body, role) => {
  const { error } = UserSchema.validate(body);
  
  if (error) {
    throw new AppError('Entradas incorretas. Tente novamente.', 400);
  }

  const response = await findOwnerEvent(id);

  if (!response) {
    throw new AppError('Usuário não encontrado.', 400);
  }

  if (response.userId === user.userId || role === 'admin') {
    return UserModel.edit(id, body);
  }
  throw new AppError('Usuário não possui permissão para editar o registro.', 400);
};

module.exports = {
  findAll,
  findByEmail,
  create,
  createAdmin,
  findByRole,
  edit,
  findOwnerEvent,
};
