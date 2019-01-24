'use latest';

const net = require('net');

const socket = new net.Socket();
let host, port, timeout;

module.exports = (ctx, done) => {
    host = ctx.data.host;
    port = ctx.data.port || 80;
    timeout = ctx.data.timeout ? parseInt(ctx.data.timeout) : 10000;

    if (!host) {
        done('HOST_NOT_SPECIFIED');
    }

    socket.setTimeout(timeout);

    socket.connect(port, host, () => {
        socket.destroy();
        done(null, { code: 200, details: 'ONLINE' });
    });

    socket.on('timeout', () => {
        socket.destroy();
        done('TIMEOUT');
    });

    socket.on('error', (err) => {
        socket.destroy();
        done(err);
    });
};