document.getElementById("myButton").onclick = function() {

    /**
    const visaBtn = document.getElementById("visaBtn");
    const masterCardBtn = document.getElementById("masterCardBtn");
    const payPalBtn = document.getElementById("payPalBtn");
    const myCheckBox = document.getElementById("myCheckBox");
     */

    if(myCheckBox.checked) { //check user clicked check box or not
        console.log("You are subscribed");
    } else {
        console.log("You are not subscribed");
    }
    /**
    if(visaBtn.checked) {
        console.log("You are paying with a Visa!");
    } else if(masterCardBtn.checked) {
        console.log("You are paying with a Master Card!");
    } else if(payPalBtn.checked) {
        console.log("You are paying with a PayPal!");
    } else {
        console.log("You must select a payment type!");
    }
     */
    //you can delete "/**" & "*/" in this file and file html to demo code
}