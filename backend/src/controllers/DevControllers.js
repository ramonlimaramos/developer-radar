const Dev = require("../models/Dev");
const axios = require("axios");
const parseStringAsArray = require("../utils/parseStringAsArray");
const { findConnections, sendMessage } = require("../websocket");

module.exports = {
    async index(request, response) {
        
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store (request, response) {

        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {

            const axiosResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const { name = login, avatar_url, bio } = axiosResponse.data;
            const techsLinted = parseStringAsArray(techs);
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
        
            dev = await Dev.create({
                name,
                github_username,
                avatar_url,
                bio,
                techs: techsLinted,
                location
            });

            // After register the new developer, filtering all the sockets connections in order
            // to look up for developers at maximum 10km of distance radius and same techs.

            const sendSocketMessageTo = findConnections(
                { latitude, longitude },
                techsLinted,
            );
            
            sendMessage(sendSocketMessageTo, 'new-dev', dev);
            
        }
    
        return response.json(dev);
    }
};