const nodemailer = require('nodemailer')
const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'hubert.pollich49@ethereal.email',
        pass: 'KUMAhsmh87SbUTmhwB'
    }
  });
  let info = await transporter.sendMail({
    from: '"THE CANADIAN DEV" <thecanadiandev@gmail.com>',
    to: 'hubert.pollich49@ethereal.email',
    subject: 'Hello ✔',
    text: 'Hello world?',
    html: '<b>Hello world?</b>'
  })
  res.json(info)
}

module.exports = sendEmail