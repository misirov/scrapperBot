const puppeteer = require("./puppeteer");

const myArgs = process.argv.slice(2)
if(myArgs.length > 1){
    puppeteer.MultiScreenShot(myArgs)
}
else if(myArgs.length === 1 ){
    puppeteer.singleScreenShot(myArgs[0])
}
else {
    console.log("Error: No <domain> to take screenshot from.\nYou need to supply a domain as an argument i.e: 'TheGuardian.com'\n")
}
