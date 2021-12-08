const { request } = require('express');
const UsersServices = require('../services/usersService');
const EventServices = require('../services/eventsService');

const findAll = (async (_request, response) => {
    const results = await UsersServices.findAll();
    response.json(results);
});

const create = (async (request, response) => {
    const { fullname, date_birth, email, city, school, password, active, role } = request.body;
    const created_at = new Date().toLocaleDateString("br-PT");
    const { _id, ...user } = await UsersServices.create({
        fullname, date_birth, email, city, school, password, active, role, created_at
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
        created_at,
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

const getAllByRole = (async(request, response) => {

    const { role } = request.params;
    const results = await UsersServices.findByRole(role);

    if (!results) {
        response.status(404).json({ message: 'Não foram encontrados registros.' });
    } else {
        response.json(results);
    }
});

const getDashboard = (async (_request, response) => {

    const users = await UsersServices.findAll();

    const students = users.filter(element => element.role == "studentes");
    const studentsBySeason = users.filter(element => element.role == "student" && element.created_at >= '01/01/2021' );
    const events = await EventServices.findAll();

    const arrey = [{
        title: 'Alunos Matriculados',
        total: students.length,
        percent: null,
    },
    {
        title: 'Alunos totais',
        total: studentsBySeason.length,
        percent: null,
    },
    {
        title: 'Horas utilizadas em eventos',
        total: events.length,
        percent: null,
    }
    ]

    const result = arrey;

    response.json(result);
});

const calculatePercentage = (async (request, response) => {

    //fazer por último
});

const getAllStudentsBySeason = (async (request, response) => {

    const students = await UsersServices.findByRole('students');
    
    if (!students) {
        response.status(404).json({ message: 'Não foram encontrados registros.' });
    }

    const results = students.filter(element => element.active === true);

    if (!results) {
        response.status(404).json({ message: 'Não foram encontrados registros.' });
    } else {
        response.json(results);
    }
});

const edit = (async (request, response) => {
    const { id } = request.params;
    const { _id: user, role } = request.user;

    const results = await UsersServices.edit(id, user, request.body, role);
    response.json(results);
});

module.exports = {
    findAll,  
    create,
    createAdmin,
    getAllByRole,
    calculatePercentage,
    getAllStudentsBySeason,
    edit,
    getDashboard,
};
