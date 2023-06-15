const nodemailer = require("nodemailer");



const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MANAGER_EMAIL,
    pass: process.env.GOOGLE_EMAIL_KEY, //process.env.GOOGLE_EMAIL_KEY
  },
});

function retSend(nameFum, pass) {
  const mailOptions = {
    from: `Organizer Events<${process.env.MANAGER_EMAIL}>`,
    to: process.env.MANAGER_EMAIL,
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
