const bcrypt = require('bcryptjs');
const util = require('../../src/utilities/utilities');

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const {email, firstName, lastName, pw, confirmPW} = req.body;

        if(pw !== confirmPW) {
            res.sendStatus(400);
        }

        if(!util.validateEmail(email)) {
            res.sendStatus(400);
        }

        


    }
}