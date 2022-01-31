const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "",
  apiSecret: ""
})

const from = "5050"
const to = "919832646077"
const text = 'Good Morning  '

vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})
