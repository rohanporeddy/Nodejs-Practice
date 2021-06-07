var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'poreddyrohan@gmail.com   ',
        pass: 'rohan@123'
    }
});

var mailServices = {
    from: 'poreddyrohan@gmail.com',
    to: 'rohanprocks123@gmail.com, rporeddy@kent.edu',
    subject: 'Sending email using Node.js',
    html: '<h1> Hello Rohan</h1> <p>This is your mail</p>'
};


transporter.sendMail(mailServices, function(err, info){
    if(err) console.log(err);
    else console.log('Email Sent');
});