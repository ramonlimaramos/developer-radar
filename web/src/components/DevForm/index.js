import React, { useState, useEffect } from 'react';

function DevForm({ submit }) {

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [github_username, setGithubUsername] = useState("");
    const [techs, setTechs] = useState("");

    // running once over the components recreation flow
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
        (position) => {
            const {latitude, longitude} = position.coords;

            setLatitude(latitude);
            setLongitude(longitude);

        },
        (err) => console.log(err),
        { timeout: 30000 }
        )
    }, []);


    async function onSubmit(e) {
        e.preventDefault();

        await submit({
            github_username,
            techs,
            latitude,
            longitude,
          });

        setGithubUsername("");
        setTechs("");
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="input-block">
            <label htmlFor="github_username">Github User:</label>
            <input name="github_username" 
                    id="github_username" 
                    value={github_username}
                    onChange={e => setGithubUsername(e.target.value)}
                    required />
            </div>

            <div className="input-block">
            <label htmlFor="techs">Tech Stack:</label>
            <input name="techs" 
                    id="techs" 
                    value={techs}
                    onChange={e => setTechs(e.target.value)}
                    required />
            </div>

            <div className="input-group">

            <div className="input-block">
                <label htmlFor="latitude">Latitude:</label>
                <input type="number" 
                        name="latitude" 
                        id="latitude" 
                        value={latitude} 
                        onChange={e => setLatitude(e.target.value)}
                        required />
            </div>

            <div className="input-block">
                <label htmlFor="longitude">Longitude:</label>
                <input type="number"
                        name="longitude" 
                        id="longitude" 
                        value={longitude} 
                        onChange={e => setLongitude(e.target.value)}
                        required />
            </div>
            </div>

            <button type="submit">Send</button>
        </form>
    );
}

export default DevForm;