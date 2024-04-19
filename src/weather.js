export default class Weather {
    static async getData (location) {
        const apiKey = '70063e8fb2914612937150037242903';
        const api = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
        let data;
        try {
            const response = await fetch(api, {
                mode: 'cors'
            });        
            const weatherData = await response.json();
            if (!weatherData.location) return "type-error";
            return weatherData;
        } catch (error) {
            console.log("error", error);
            return error;
        }
        // fetch (api, {
        //     mode: 'cors'
        // })
        // .then (function(value) {
        //     return value.json();
        // })
        // .then (function (value) {
        //     if (!value.current) return null;
        //     console.log(value);
        //     return value;
        // })
        // .catch (function () {
        //     throw new Error;
        // })
        // const weatherData = (
        //     async () =>  {
        //         const response = await fetch(api, {
        //             mode: 'cors'
        //         });
        //         const json = await response.json();
        //         return json;
        //     }
        // )();
        // weatherData.then(function (value) {
        //     if (!value.current) console.log("In chie search kardi baba!");
        //     console.log(value);
        //     return value.current;
        // })
        // .then (function(value) {
        //     return value;
        // })
        // .catch(function(value) {
        //     console.log("Connection Error");
        // })

    }
}