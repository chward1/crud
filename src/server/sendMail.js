const config = require("../../config")
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');

app.use(cors())
const bodyParser = require('body-parser');
app.use(express.json())

app.post('/send', (req, res, next) => {
    console.log(JSON.stringify(req.body));
    console.log(JSON.stringify(req.data));

    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message
    const content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message} `
    const mail = {
        from: name,
        to: config.user,
        subject,
        text: content
    }

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            type: 'OAuth2',
            ...config
        }
    });

    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.log(err)

            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})



const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});

