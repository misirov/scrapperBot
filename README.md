# scrapperBot
## This bot takes one or more command line arguments as `domains` and:

- Navigates to a URL.
- Takes a screenshot and generates a .pdf
- If more than one argument is provided, a `screenshots` & `pdfs` directory are created.
- All pdfs are merged into one for easier reporting.

### Example:
![image](https://user-images.githubusercontent.com/47452703/154780191-8f0dafc8-5986-4486-bb64-7a3042f2d5a4.png)


```git clone <this repo>```

`npm install`

### Dependencies:
- puppeteer
- pdf-merger-js
  
 + Screenshots are HQ and often times cookie boxes do not affect them
 - Some websites do not display the full page

### Drawbacks
1) Some websites diplay cookie modals which impede a clear view of the content. Extra functionality may include accepting these cookies.
2) Missing RegEx to parse long URL's
3) PDF output must be improved
