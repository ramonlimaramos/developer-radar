import { baseURL } from '../../env';
import socketio from 'socket.io-client';

const socket = socketio(baseURL, {
    autoConnect: false,
});

function connect(regionObj) {
    socket.io.opts.query = regionObj; 
    socket.connect();
}

function disconnect() {
    if(socket.connected) {
        socket.disconnect();
    }
}

function subscribeToNewDevs(callback) {
    socket.on('new-dev', callback);
}

export { connect, disconnect, subscribeToNewDevs };