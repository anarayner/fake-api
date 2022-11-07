const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
    next();
});

server.get('/item', (req, res) => {
    try {
            return res.json();
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});


server.use(router);

server.listen(process.env.PORT, () => {
    console.log('server is running...');
});
