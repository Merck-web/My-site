const path = require('path')
const env = require('dotenv').config()
const AutoLoad = require('@fastify/autoload')

// Pass --options via CLI arguments in command to enable these options.
module.exports.options = {}

module.exports = async function (fastify, opts) {
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, './routes'),
  })

  fastify.addHook('onRequest', (req, reply, done) => {
    try {
      req.log.info({
        url:     req.raw.url,
        id:      req.id,
        headers: {
          host:                 req.headers.host,
          referer:              req.headers.referer,
          'user-agent':         req.headers['user-agent'],
          'x-forwarded-for':    req.headers['x-forwarded-for'],
          'x-real-ip':          req.headers['x-real-ip'],
          'sec-ch-ua':          req.headers['sec-ch-ua'],
          'sec-ch-ua-platform': req.headers['sec-ch-ua-platform'],
          'sec-ch-ua-mobile':   req.headers['sec-ch-ua-mobile'],
        },
      }, 'log for check headers of users');
    }
    catch(err) {
      console.log('ERROR ON REQUEST HOOK');
      console.log(err.message, err.stack);
    }
    done();
  });


}
