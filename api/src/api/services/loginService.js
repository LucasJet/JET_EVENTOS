const jwt = require('jsonwebtoken');
const UserModel = require('../models/users');
const LoginSchema = require('../schemas/loginSchema');
const { jwtData } = require('../config/auth');
const AppError = require('../errors/appError');

const findByEmail = async (email) => UserModel.findByEmail(email);

const auth = async (loginData) => {
    const { error } = LoginSchema.validate(loginData);
    if (error) {
        throw new AppError('Todos os campos devem ser preenchidos', 401);
    }

    const { email, password } = loginData;

    const userLogin = await findByEmail(email);

    if (!userLogin || userLogin.password !== password) {
        throw new AppError('Usuário ou senha incorretos.', 401);
    }

    const { _id, role } = userLogin;
    const { secret, expiresIn } = jwtData;
    const user = { _id, role, email };

    const token = jwt.sign({ data: user }, secret, {
        expiresIn,
    });

    return {token, user};
};

module.exports = {
    auth,
};
