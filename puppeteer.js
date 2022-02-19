const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const PDFMerger = require('pdf-merger-js');



const MultiScreenShot = async (domainArray) => {

    console.log('Taking multiple screenshots...', domainArray)

    // make directory to save pdfs 
    var dir = './pdfs';
    var scs = './screenshots'
    if (!fs.existsSync(dir) || !fs.existsSync(scs)){
        fs.mkdirSync(dir);
        fs.mkdirSync(scs);
    }
    // create merger object
    const merger = new PDFMerger()

    // create browser object
    const browser = await puppeteer.launch({headless: true});

    // iterate through each domain & take screenshot + make pdf
    for(let i = 0; i < domainArray.length; i++){
        const url = 'https://' + domainArray[i];
        const page = await browser.newPage();
        await page.goto(url, {waitUntil:'networkidle2'});
        await page.waitForTimeout('2000')
            console.log(`   > Taking screenshot ${url}`);
        await page.screenshot({path: `./screenshots/${domainArray[i]}.png`, fullPage:true,
            // clip:{x:15,y:6500,width:770,height:900 }   
        })

        // save page as pdf
        await page.pdf({path: `./pdfs/${i}.pdf`, fullPage:true})

        // add pdf path to merger
        merger.add(`./pdfs/${i}.pdf`)

    }
    await browser.close();
    console.log("Saving images and closing driver...")

    // merge all pdfs inside the merger
    await merger.save('merged.pdf');
}


const singleScreenShot = async (domain) => {
    console.log('Taking single screenshot...')
    const url = 'https://' + domain;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
        console.log(`   > Navigating to ${url}`);
    await page.goto(url, {waitUntil:'networkidle2'});
    await page.waitForTimeout('2000')
        console.log(`   > Taking screenshot`);
    await page.screenshot({path: `./screenshot.png`, fullPage:true,
        // clip:{x:15,y:6500,width:770,height:900 }   
    })
    await page.pdf({path: `./${domain}.pdf`, fullPage:true})
    await browser.close();
        console.log("   > Saving image and closing driver...")
}



module.exports = {
    MultiScreenShot,
    singleScreenShot
}