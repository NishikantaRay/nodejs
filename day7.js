const puppeteer = require('puppeteer');
 
(async () => {
    let url ='https://www.incredibleindia.org/content/incredible-india-v2/en/destinations/bhubaneswar/pipli.html';
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.incredibleindia.org/content/incredible-india-v2/en/destinations/puri/chilika-lake.html');
  let data =await page.evaluate(()=>{
    let description=document.querySelector('div[class="section destination-detail"]').innerHTML;
    let image =document.querySelector('div[class="carousel-item active"]').innerHTML;
    let title =document.querySelector('h3[class="title title-xl text-white text-uppercase no-line-height"]').innerHTML;
    return{
        title,
        description,
        image
    }
  });
  console.log(data);
  await browser.close();
})();