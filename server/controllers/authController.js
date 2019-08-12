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

        await db.GET_EMAILS([email.toLowerCase()]).then((users) => {
            if(users.length !== 0) {
                if(users[0].email === email.toLowerCase()) {
                    res.sendStatus(400);
                } else {
                    res.sendStatus(401);
                }
            } else {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(confirmPW, salt);

                db.REGISTER_USERS([email.toLowerCase(), firstName, lastName, hash]).then((result) => {
                    res.sendStatus(200);
                }).catch((err) => {
                    console.log(`Server error while attempting to register user: ${err}`);
                    res.sendStatus(500);
                })
            }
        }).catch((err)=> {
            console.log(`Error while attempting to get emials: ${err}`)
            res.sendStatus(500);
        });
    },

    login: (req, res) => {
        const db = req.app.get('db');
        const {email, pw} = req.body;

        db.GET_EMAILS([email]).then((users) => {
            if(users.length === 0) {
                res.sendStatus(422);
            } else {
                const userPW = users[0].user_pw;
                const confirmedPW = bcrypt.compareSync(pw, userPW);

                if(confirmedPW){
                    res.sendStatus(200);
                    console.log(ok);
                }
            }
        }).catch((err)=> {
            console.log(`Server error while attempting to get emails: ${err}`);
            res.sendStatus(500);
        })
    }
}