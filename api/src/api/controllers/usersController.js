const UsersServices = require('../services/usersService');

const findAll = (async (_request, response) => {
    const results = await UsersServices.findAll();
    response.json(results);
});

const create = (async (request, response) => {
    const { fullname, date_birth, email, city, school, password, active, role } = request.body;
    const { _id, ...user } = await UsersServices.create({
        fullname, date_birth, email, city, school, password, active, role
    });

    response.status(201).json({ user: {
        fullname: user.fullname,
        date_birth: user.date_birth,
        email: user.email,
        city: user.city,
        school: user.school,
        password: user.password,
        active: user.active,
        role: user.role,
        created_at: new Date(),
        _id,
    } });
});

const createAdmin = (async (request, response) => {
    const userData = request.body;
    const { role: roleAdmin } = request.user;

    const { _id, ...user } = await UsersServices.createAdmin(
        userData, roleAdmin,
    );

    response.status(201).json({ user: {
        fullname: user.fullname,
        date_birth: user.date_birth,
        email: user.email,
        city: user.city,
        school: user.school,
        password: user.password,
        active: user.active,
        role: user.role,
        _id,
    } });
});

module.exports = {
    findAll,  
    create,
    createAdmin,
};
