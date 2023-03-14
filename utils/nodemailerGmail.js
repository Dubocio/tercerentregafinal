const { createTransport } = require(`nodemailer`);
const dotenv = require(`dotenv`);
dotenv.config();

const EMAIL = process.env.EMAIL;
const PASS = process.env.PASS_EMAIL_API;

const transporter = createTransport({
    host: `gmail`,
    port: 465,
    auth: {
        user: EMAIL,
        pass: PASS
    }
});
const options = {
    from: "Server Node.js",
    to: "dubokovic7@gmail.com",
    subject: "Test mail from node.js n2",
    html: "<h1>Tercera Prueba con Gmail</h1>",
  };

    try {
        const response = await transporter.sendMail(options);
        console.log(response);

    } catch (e) {
        console.error(e);
    }


module.exports = sendEmail;
