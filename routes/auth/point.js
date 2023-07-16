module.exports = function (fastify, opts, next) {
    fastify.route({
        method: 'POST',
        url:    '/login',
        schema: {
            body: {
                type:       'object',
                properties: {
                    login:        { type: 'string' },
                    password:     { type: 'string' },
                },
                required:   [],
            },
            response: {
                400: {
                    type:       'object',
                    properties: {
                        message:    { type: 'string' },
                        statusCode: { type: 'integer' },
                    },
                },
            },
        },
        async handler(request, reply) {
            console.log('work')
            reply.send(request.body);
        },
    });

    next();
}
console.log(process.env.API, 'process.env.API')
module.exports.autoPrefix = process.env.API + 'auth';