//Importing object url
import { URL } from 'url'


const myurl = new URL('https://www.google.com/search?q=cristiano+ronaldo&oq=cristiano&aqs=chrome.0.35i39i355j46i39j69i57j0i131i433i512j0i433i512j46i433i512j69i60l2.2704j0j7&sourceid=chrome&ie=UTF-8');

console.log("Hash:"+myurl.hash);
console.log("Host:"+myurl.host);//No port name
console.log("Hostname:"+myurl.hostname);
console.log("Href:"+myurl.href);
console.log("Pathname:"+myurl.pathname);
console.log("Port:"+myurl.port);
console.log("Protocol:"+myurl.protocol);
console.log("Search:"+myurl.search);
console.log("Search Param:"+myurl.searchParams);
