const express = require('express');
const cors = require('cors')
const next = require('next');
const hostname = 'localhost'
const port = process.env.PORT || 3030
const request = require('request');
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
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-site': 'cross-site',
            'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36',
            'x-session-country2name': 'IN',
            'x-session-key': '',
            'x-xsrf-token': 'null'
          },
          body: `voucherPricePoint.id=211885&voucherPricePoint.price=75.0&voucherPricePoint.variablePrice=0&n=5%2F5%2F2022-1140&email=hraz%40gmail.com&userVariablePrice=0&order.data.profile=eyJuYW1lIjoiICIsImRhdGVvZmJpcnRoIjoiIiwiaWRfbm8iOiIifQ%3D%3D&user.userId=${req.query.charid}&user.zoneId=&msisdn=&voucherTypeName=BATTLE_GROUND&shopLang=en_IN&checkoutId=b25a11d8-6000-4111-b8e4-e6ca5e4d86a9&affiliateTrackingId=&impactClickId=&anonymousId=54621a64-0e94-49e2-8d53-f28553d1ff33`
        
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          res.send(response.body)
        });
      });
      
      server.get('/api/codashop', (req, res) => {
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
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-site': 'cross-site',
            'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36',
            'x-session-country2name': 'IN',
            'x-session-key': '',
            'x-xsrf-token': 'null'
          },
          body: `voucherPricePoint.id=211885&voucherPricePoint.price=75.0&voucherPricePoint.variablePrice=0&n=5%2F5%2F2022-1140&email=hraz%40gmail.com&userVariablePrice=0&order.data.profile=eyJuYW1lIjoiICIsImRhdGVvZmJpcnRoIjoiIiwiaWRfbm8iOiIifQ%3D%3D&user.userId=${req.query.charid}&user.zoneId=&msisdn=&voucherTypeName=BATTLE_GROUND&shopLang=en_IN&checkoutId=b25a11d8-6000-4111-b8e4-e6ca5e4d86a9&affiliateTrackingId=&impactClickId=&anonymousId=54621a64-0e94-49e2-8d53-f28553d1ff33`
        
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
