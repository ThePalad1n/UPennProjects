const signup = (email, subject, text, cb) => {

    const mailOptions={
        from: email,
        to: 'valuecraftofficial@gmail.com',
        subject: subject,
        text: text
    };
    
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        }
        else{
            cb(err, data);
        }
    });
}

module.exports = sendMail;