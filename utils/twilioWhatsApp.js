const twilio = require(`twilio`);

const ACCOUNT_SID = `AC1bf8d87815d994581e6965094a15a0fe`;
const AUTH_TOKEN = `ae515f1d075a12063c7f455a68e05fcf`;
const PHONE_NUMBER_WHATSAPP = `whatsapp:+15676667338`;

const client = twilio(ACCOUNT_SID, AUTH_TOKEN);

const sendWhatsApp = async (body, from, to) => {
    try {
        const message = await client.messages.create({
            body: body,
            from: from,
            to: to
           
        })
        console.log(message);

    } catch (e) {
        console.error(e.message);
    }

}

module.exports = sendWhatsApp;