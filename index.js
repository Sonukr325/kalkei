import express from "express";
import next from "next";
import request from "request";

const hostname = 'localhost'
const port = process.env.PORT || 3000

const dev = process.env.NODE_ENV !=='production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();


    server.post('/', (req, res) => {
        var options = {
          'method': 'POST',
          'url': 'https://order-sa.codashop.com/initPayment.action',
          'headers': {
            'authority': 'order-sa.codashop.com',
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'en-IN',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'origin': 'https://www.codashop.com',
            'referer': 'https://www.codashop.com/',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36',
            'x-session-country2name': 'IN',
            'x-session-key': '',
            'x-xsrf-token': 'null'
          },
          body: `voucherPricePoint.id=312982&voucherPricePoint.price=37.0&voucherPricePoint.variablePrice=0&n=1%2F7%2F2022-1823&email=braz%40gmaip.com&userVariablePrice=0&order.data.profile=eyJuYW1lIjoiICIsImRhdGVvZmJpcnRoIjoiIiwiaWRfbm8iOiIifQ%3D%3D&user.userId=${req.query.charid}&user.zoneId=&msisdn=&voucherTypeName=BATTLE_GROUND&shopLang=en_IN&checkoutId=b2b16539-0bdf-478f-84ab-edca84f5fee4&affiliateTrackingId=&impactClickId=&anonymousId=eb4fc926-b2be-40d8-8b94-11717c64866a`
        
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          res.send(response.body)
        });
      });
      
      server.get('/api', (req, res) => {
        var options = {
          'method': 'POST',
          'url': 'https://order-sa.codashop.com/initPayment.action',
          'headers': {
            'authority': 'order-sa.codashop.com',
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'en-IN',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'origin': 'https://www.codashop.com',
            'referer': 'https://www.codashop.com/',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Linux"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36',
            'x-session-country2name': 'IN',
            'x-session-key': '',
            'x-xsrf-token': 'null'
          },
          body: `voucherPricePoint.id=312982&voucherPricePoint.price=37.0&voucherPricePoint.variablePrice=0&n=1%2F7%2F2022-1823&email=braz%40gmaip.com&userVariablePrice=0&order.data.profile=eyJuYW1lIjoiICIsImRhdGVvZmJpcnRoIjoiIiwiaWRfbm8iOiIifQ%3D%3D&user.userId=${req.query.charid}&user.zoneId=&msisdn=&voucherTypeName=BATTLE_GROUND&shopLang=en_IN&checkoutId=b2b16539-0bdf-478f-84ab-edca84f5fee4&affiliateTrackingId=&impactClickId=&anonymousId=eb4fc926-b2be-40d8-8b94-11717c64866a`
        
       }
       request(options, function (error, response) {
        if (error) throw new Error(error);
        res.send(response.body)
      });
    
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });
   
    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://${hostname}:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
