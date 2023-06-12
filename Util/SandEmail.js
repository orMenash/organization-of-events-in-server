const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ormjbh@gmail.com",
    pass: "oscogfjjxliynzgo",
  },
});

function retSend(nameFum, pass) {
  const mailOptions = {
    from: "Organizer Events<ormjbh@gmail.com>",
    to: "ormjbh@gmail.com",
    subject: nameFum + " שכח את הסיסמא שלו ...",
    text: "סיסמתך לאתר אירגון אירועים היא :  " + pass,
  };
  const myPromise = new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        reject(error);
      } else {
        resolve("Email sent: " + info.response);
      }
    });
  });
  return myPromise;
}
module.exports = retSend;
