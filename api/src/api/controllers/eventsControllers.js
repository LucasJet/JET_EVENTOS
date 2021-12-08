const EventServices = require('../services/eventsService');
const UserEventServices = require('../services/userEventService');

const findAll = (async (_request, response) => {
    const results = await EventServices.findAll();
    response.json(results);
});

const getEvent = (async (request, response) => {
    let page = parseInt(request.query.page);
    let limit = parseInt(request.query.limit);
    let skip = limit * (page - 1);
    const events = await EventServices.findAllPagination(skip, limit);
    const userEvents = await UserEventServices.findAll();
    const { _id: user } = request.user;
    
    console.log(user);

    events.forEach(event => {
        let userEvent = userEvents.find(element => element.userId == user && element.eventId == event._id);

        if (userEvent){
            console.log(event._id, event.userId);
            event.status = userEvent.status;
        }else{
            event.status = 'Pendente';
        }    
    });

    response.json(events);
});

const findById = (async (request, response) => {
    const { id } = request.params; 
   
    const result = await EventServices.findById(id);
    if (!result) {
        response.status(404).json({ message: 'Evento não encontrado' });
    } else {
        response.json(result);
    }
});

const create = (async (request, response) => {
    const { title, description, date, hour_from, hour_to, required } = request.body;
    const { _id: user } = request.user;

    const { _id, ...event } = await EventServices.create({
        title, description, date, hour_from, hour_to, required, userId: user.toString(),
    });

    response.status(201).json({
        event: {
            title: event.title,
            description: event.description,
            date: event.date,
            hour_from: event.hour_from,
            hour_to: event.hour_to,
            required: event.required,
            _id,
        },
    });
});

const edit = (async (request, response) => {
    const { id } = request.params;
    const { _id: user, role } = request.user;

    request.body.userId = user.toString();
    const results = await EventServices.edit(id, request.body, role);
    response.json(results);
});

const createImage = (async (request, response) => {
    const { id } = request.params;
    const image = request.file ? request.file.filename : undefined;
    const { _id: user, role } = request.user;

    const fullUrl = `${request.get('host')}/src/uploads/${image}`;
    
    const results = await EventServices.createImage(id, fullUrl, user.toString(), role);
    response.json(results);
});

const remove = (async (request, response) => {
    const { id } = request.params;
    const { _id: user, role } = request.user;

    await EventServices.remove(id, user.toString(), role);

    response.status(204).json({});
});

const calculateEventHours = (async (_request, response) => {
    const events = await EventServices.findAll();
    let soma = 0;
    events.forEach((event) => {
        soma += EventServices.calculateDiffTime(event.hour_from, event.hour_to);
    });
    const hours = soma/60;
    response.json(hours);
});

const getTotalEvents = (async (_request, response) => {
    const events = await EventServices.findAll();
    response.json(events.length);
});

module.exports = {
    findAll,
    findById,
    create,
    edit,
    createImage,
    remove,
    calculateEventHours,
    getEvent,
    getTotalEvents,
};
