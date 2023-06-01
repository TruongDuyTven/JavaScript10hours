//useful String properties and methods

let userName = "User Name";
let numberPhone = "0987-654-321"

let numberOfChar = userName.length; // return the number of characters. output: 9
let firstChar = userName.charAt(0); // return the first character. output: "u"
let location_in = userName.indexOf("a"); // return the location. output: 7
let location_out = userName.lastIndexOf("e"); // return the location of last character. output: 9
userName = userName.trim(); // return the user names without begin and end spaces. input: "  javascript  ", output: "javascript"
userName = userName.toUpperCase(); // return upper case user name. output: "USER NAME"
userName = userName.toLowerCase(); // return lower case user name. output: "user name"
numberPhone = userPhone.replaceAll("-", ""); // return String with replae "-" by "". output: "0987654321"

console.log(userName);
console.log(numberPhone);