const eBay = require('ebay-node-client')('CLIENT-ID', 'CLIENT-SECRET');

// get your cliendId and clientSecret at https://developer.ebay.com/my/keys

// use of ebay api
exports.find = async (req, res) => {
  try {
    var token = await eBay.application.getOAuthToken({
        grant_type: 'client_credentials',
        scope: 'https://api.ebay.com/oauth/api_scope'
    });
    eBay.setToken(token.access_token);
  } catch (error) {
      console.log('error ', error);
      return res.json({
        message: 'Error al conectar a eBay: ' + error.error_description,
      });
  }

  try {
    eBay.browse.search({ q: req.params.query }).then((data) => {
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

/**
 * view products by category_id
 */
exports.getItemsByCategory = async (req, res) => {
  try {
    var token = await eBay.application.getOAuthToken({
        grant_type: 'client_credentials',
        scope: 'https://api.ebay.com/oauth/api_scope'
    });
    eBay.setToken(token.access_token);
  } catch (error) {
      console.log('error ', error);
      return res.json({
        message: 'Error al conectar a eBay: ' + error.error_description,
      });
  }

  try {
    eBay.catalog.search({ category_ids: req.params.category }).then((data) => {
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