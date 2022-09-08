/* Your regex should match the string JACK
Your regex should not match the string J
Your regex should match the string Jo
Your regex should match the string Oceans11
Your regex should match the string RegexGuru
Your regex should not match the string 007
Your regex should not match the string 9
Your regex should not match the string A1
Your regex should not match the string BadUs3rnam3
Your regex should match the string Z97
Your regex should not match the string c57bT3
Your regex should match the string AB1
Your regex should not match the string J%4
 */
let username = "JACK";
let userCheck = /^[a-zA-Z][^0-9]*[a-zA-Z]+\d*$|^[A-Z]\d\d/; // Change this line
let result = userCheck.test(username);
console.log(result)

