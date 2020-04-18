const socketio = require("socket.io");
const parseStringAsArray = require("./utils/parseStringAsArray");
const calculateDistanceFromLatLongInKm = require("./utils/calculateDistanceFromLatLongInKm");

let io;
const connections = []; //TODO - change me to redis db;

exports.setupWebSocket = (server) => {

    io = socketio(server);

    io.on("connection", (socket) => {
        
        const {latitude, longitude, techs} = socket.handshake.query;

        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude),
            },
            techs: parseStringAsArray(techs)
        })
    })
}

exports.findConnections = (coordinates, techs) => {
    
    // Check it out if the coordinates of socket connections are less then 10 km and exist at least one techs
    return connections.filter(connection => {
        return calculateDistanceFromLatLongInKm(coordinates, connection.coordinates) < 10
            && connection.techs.some(techsItem => techs.includes(techsItem));
    })
};


exports.sendMessage = (to, message, data) => {
    to.forEach(connection => {
        io.to(connection.id).emit(message, data);
    });
}