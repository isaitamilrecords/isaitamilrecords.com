function sendMail(sub, message) {
    Email.send({
        SecureToken: "69614780-f300-45d5-96fa-f08905420c15",
        To: "isaitamilrecords@gmail.com",
        From: "abishekmahi@yahoo.com",
        Subject: sub,
        Body: message
    }).then(
        successPrompt()
    );
}