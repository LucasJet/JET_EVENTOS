const UserEventServices = require('../services/userEventService');

const findAll = (async (_request, response) => {
    const results = await UserEventServices.findAll();
    response.json(results);
});

const findById = (async (request, response) => {
    const { id } = request.params; 
   
    const result = await UserEventServices.findById(id);

    if (!result) {
        response.status(404).json({ message: 'Confirmação do evento não encontrada.' });
    } else {
        response.json(result);
    }
});

const create = (async (request, response) => {
    const { status, eventId } = request.body;
    const { _id: user } = request.user;
    
    const { _id, ...userEvent } = await UserEventServices.create({
        status, eventId, userId: user.toString(),
    });

    response.status(201).json({
        userEvent: {
            status: userEvent.status,
            eventId: userEvent.eventId,
            userId: userEvent.userId,
            _id,
        },
    });
});

const edit = (async (request, response) => {
    const { id } = request.params;
    const { _id: user, role } = request.user;

    request.body.userId = user.toString();
    const results = await UserEventServices.edit(id, request.body, role);
    response.json(results);
});

const remove = (async (request, response) => {
    const { id } = request.params;
    const { _id: user, role } = request.user;

    await UserEventServices.remove(id, user.toString(), role);

    response.status(204).json({});
});

module.exports = {
    findAll,
    findById,
    create,
    edit,
    remove,
};
