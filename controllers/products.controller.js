const Product = require('../modules/products.model');

exports.product_create = function (req, res) {
  let product = new Product(
    {
      name: req.body.name,
      price: req.body.price,
    }
  );

  product.save(function (err) {
    if (err) return err;

    res.send('Product created successfully.');
  });
}

exports.product_details = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (err) return err;
    res.send(product);
  })
};

exports.product_update = function (req, res) {
  Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
    if (err) return err;
    res.send('Product udpated successfully.');
  });
};

exports.product_delete = function (req, res) {
  Product.findByIdAndDelete(req.params.id, function (err) {
    if (err) return err;
    res.send('Product removed successfully.');
  });
}