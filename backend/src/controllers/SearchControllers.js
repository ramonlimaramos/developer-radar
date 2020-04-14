const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
    async index(request, response) {

        const { latitude, longitude, techs } = request.query;
        
        if(!latitude || !longitude || !techs)
            return response.status(403).json({message: "Invalid fields"});

        const techsLinted = parseStringAsArray(techs);

        let devs = await Dev.find({
            techs: {
                $in: techsLinted
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000, // 10 meters
                }
            }
        })

        return response.json({ devs });
    }
}