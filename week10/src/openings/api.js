const API_BASE_ADDRESS = 'http://localhost:4000';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

 
export default class Api {
    static async getUsers() {
        await sleep(1000);
        const uri = API_BASE_ADDRESS + "/users";

        return fetch(uri, {
            method: 'GET'
        });
    }
}