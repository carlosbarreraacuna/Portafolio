import emailjs from 'emailjs-com';

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}

function ContactUs() {
  return (
    <form onSubmit={sendEmail}>
      // Your form fields here
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactUs;
