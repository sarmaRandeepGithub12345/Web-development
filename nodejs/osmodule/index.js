import os from 'os'


console.log("Platform:"+os.platform());
console.log("Architecture:"+os.arch());
//CPU information
console.log(os.cpus());
console.log("(Laptop model No)Hostname:"+os.hostname());
console.log("Homedirectory:"+os.homedir());
console.log("Network Interfaces:");
console.log(os.networkInterfaces());
console.log("Free Memory:"+os.freemem());
console.log("total memory:"+os.totalmem());




