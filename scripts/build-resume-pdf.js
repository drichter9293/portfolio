const puppeteer = require('puppeteer')

const buildPdf = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 })
  await page.goto('http://localhost:8000/resume', {
    waitUntil: 'networkidle2',
  })
  await page.pdf({
    path: 'static/daniel-richter-resume.pdf',
    format: 'Letter',
  })

  await browser.close()
}

buildPdf()
