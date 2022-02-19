# scrapperBot
## This bot takes one or more command line arguments as <domain> and:

- Navigates to a URL
- Takes a screenshot and generates a .pdf
- Merges all pdf's into one for easier reporting

```git clone <this repo>```

`npm install`

### Dependencies:

- puppeteer
- pdf-merger-js



Example:
`node ./main.js theguardian.com tradingview.com yearn.finance`

### Drawbacks

Some websites diplay cookie modals which impede a clear view of the content. Extra functionality may include accepting these cookies.
