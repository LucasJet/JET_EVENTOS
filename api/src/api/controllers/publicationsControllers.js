const PublicationServices = require('../services/publicationService');
const UsersServices = require('../services/usersService');

const findAll = (async (_request, response) => {
    const results = await PublicationServices.findAll();
    response.json(results);
});

const getPublication = (async (request, response) => {
    let page = parseInt(request.query.page);
    let limit = parseInt(request.query.limit);
    let skip = limit * (page - 1);

    const publication = await PublicationServices.findAllPagination(skip, limit);
    response.json(publication);
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

    const { title, description } = request.body;
    const { _id: user } = request.user;
    const created_at = new Date().toLocaleDateString("br-PT");

    const username = await UsersServices.findById(user);
    const fullname = username.fullname;

    const { _id, ...publication } = await PublicationServices.create({
        title, description, created_at, user: fullname,
    });

    response.status(201).json({
        publication: {
            title: publication.title,
            description: publication.description,
            created_at,
            user: fullname,
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

const getTotalPublications = (async (_request, response) => {
    const publications = await PublicationServices.findAll();
    response.json(publications.length);
});

module.exports = {
    findAll,
    findById,
    create,
    edit,
    remove,
    getPublication,
    getTotalPublications,
};
