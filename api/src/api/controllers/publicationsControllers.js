const PublicationServices = require('../services/publicationService');

const findAll = (async (_request, response) => {
    const results = await PublicationServices.findAll();
    response.json(results);
});

const findById = (async (request, response) => {
    const { id } = request.params; 
   
    const result = await PublicationServices.findById(id);

    if (!result) {
        response.status(404).json({ message: 'Publicação não encontrada' });
    } else {
        response.json(result);
    }
});


const create = (async (request, response) => {

    console.log(request.body);

    const { title, description } = request.body;
    const { _id: user } = request.user;

    const { _id, ...publication } = await PublicationServices.create({
        title, description, userId: user.toString(),
    });

    response.status(201).json({
        publication: {
            title: publication.title,
            description: publication.description,
            userId: publication.userId,
            _id,
        },
    });
});

const edit = (async (request, response) => {
    const { id } = request.params;
    const { _id: user, role } = request.user;

    request.body.userId = user.toString();
    const results = await PublicationServices.edit(id, request.body, role);
    response.json(results);
});

const remove = (async (request, response) => {
    const { id } = request.params;
    const { _id: user, role } = request.user;

    await PublicationServices.remove(id, user.toString(), role);

    response.status(204).json({});
});

module.exports = {
    findAll,
    findById,
    create,
    edit,
    remove,
};
