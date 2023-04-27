/* document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.send("service_0wcvuvh", "template_otxkr9i", {
      name: "PR",
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
       subject: this.subject.value 
    }).then(function(response) {
      alert('Email sent!');
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      alert('Error sending email: ', error);
      console.log('FAILED...', error);
    });
  }); */
  const btn = document.getElementById("btn");

  btn.addEventListener("click",()=>{
    console.log("Clicked");
    const emailval = document.getElementById("email");
    const messageval = document.getElementById("message");
    var para = {
        name : "PR",
        to_email: emailval.value,
        message: messageval.value
    };
    const serviceID = "service_0wcvuvh";
    const templateID = "template_otxkr9i";
    emailjs.send(serviceID,templateID,para).then((res)=>{
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully");
    })
    .catch((err) => console.log(err));
});
