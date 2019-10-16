const Ebay = require('ebay-node-api');

// for info about ebay-node-api config, look at https://www.npmjs.com/package/ebay-node-api 

// get your cliendId and clientSecret at https://developer.ebay.com/my/keys
const ebay = new Ebay({
  clientID: '--Client Id----',
  clientSecret: '-- Client Secret --',
  env: 'SANDBOX',
  body: {
      grant_type: 'client_credentials',
  //you may need to define the oauth scope
  scope: 'https://api.ebay.com/oauth/api_scope'
  }
});

// use of ebay api
exports.find = async (req, res) => {
  try {
    ebay.findItemsByKeywords(req.params.query).then((data) => {
      console.log(data);
      res.json(data);
    }, (error) => {
        console.log(error);
        res.json(error);
    });

  } catch (error) {
    console.log(error);
    res.json({
      message: 'Error al conectar a eBay'
    });
    next();
  }
};

exports.getItemsByCategory = async (req, res) => {
  try {
   ebay.findItemsByCategory(req.params.category).then((data) => {
      console.log(data);
      res.json(data);
    }, (error) => {
        console.log(error);
        res.json(error);
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: 'Error al conectar a eBay'
    });
    next();
  }
};