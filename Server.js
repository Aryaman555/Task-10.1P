const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');

const app = express();

// Configuring Mailgun API and Domain
const mailgunApiKey = '5ae11eebc55fa249af557c86fae3ec99-5465e583-1faeedce';
const mailgunDomain = 'sandboxa36876a7bb0f49a4a3a781014376d275.mailgun.org';
const mg = mailgun({ apiKey: mailgunApiKey, domain: mailgunDomain });

// BodyParser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Provide html to server
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handling of form
app.post('/subscribe', (req, res) => {
    const { email } = req.body;
  
    const data = {
      from: 'Aryaman Dhir <aryaman4766.be22@chitkara.edu.in>',
      to: email,
      subject: 'Welcome Email',
      text: 'Thank you for subscribing to DEV Deakin newsletter!',
    };
  
    mg.messages().send(data, (error, body) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Error sending email.' });
      } else {
        console.log('Email sent:', body);
        res.json({ message: 'Welcome email sent successfully.' });
      }
    });
  });

// for start of server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});