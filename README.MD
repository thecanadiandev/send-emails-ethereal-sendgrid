# Packages details

- nodemailer [package](https://nodemailer.com/)
- sending email: [Ethereal](https://ethereal.email/create)
- for prod, we need a sendgrid account

- Create a sender
- Create API key > Email API, Web API
- Add env -> SENDGRID_API_KEY
- install the npm package

```js
const sgMail = require('@sendgrid/mail');

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: '',
    from: '',
    subject: '',
    text: '',
    html: '',
  };
  const info = await sgMail.send(msg);
  res.json(info);
};
```
