// Logic behind the functionalities
// ap = apartment
const data = require("./data");

class Controller {
    // getting all aps
    async getAps() {
        // return all aps
        return new Promise((resolve, _) => resolve(data));
    }

    // getting a single ap
    async getAp(id) {
        return new Promise((resolve, reject) => {
            // get the ap
            let ap = data.find((ap) => ap.id === parseInt(id));
            if (ap) {
                // return the ap
                resolve(ap);
            } else {
                // return an error
                reject(`ap with id ${id} not found `);
            }
        });
    }

    // creating a ap
    async createAp(ap) {
        return new Promise((resolve, _) => {
            // create a ap, with random id and data sent
            let newAp = {
                id: Math.floor(4 + Math.random() * 10),
                ...ap,
            };

            // return the new created ap
            resolve(newAp);
        });
    }

    // updating a ap
    async updateAp(id) {
        return new Promise((resolve, reject) => {
            // get the ap.
            let ap = data.find((ap) => ap.id === parseInt(id));
            // if no ap, return an error
            if (!ap) {
                reject(`No ap with id ${id} found`);
            }
            //else, update it by setting completed to true
            ap["occupied"] === true ? ap["occupied"]=false : ap["occupied"]=true ;
            // return the updated ap
            resolve(ap);
        });
    }

    // deleting a ap
    async deleteAp(id) {
        return new Promise((resolve, reject) => {
            // get the ap
            let ap = data.find((ap) => ap.id === parseInt(id));
            // if no ap, return an error
            if (!ap) {
                reject(`No ap with id ${id} found`);
            }
            // else, return a success message
            resolve(`ap ${ap.title} deleted successfully`);
        });
    }
}
module.exports = Controller;