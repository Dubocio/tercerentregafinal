const twilio = require(`twilio`);

const dotenv = require(`dotenv`);
dotenv.config();

//no toma process.env
const accountSid = 'AC1bf8d87815d994581e6965094a15a0fe'; //ver porque no toma process.env
const authToken = 'ae515f1d075a12063c7f455a68e05fcf'; //ver porque no toma process.env

const client = twilio(accountSid, authToken);

const sendSMS = async (body, from, to) => {
    try {
        const message = await client.messages.create({
            body: body,
            from: from,
            to: to
        })
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

module.exports = sendSMS;