const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const reviewSchema = new mongoose.Schema({
  customer: String,
  product: String,
  rating: String,
  review: String,
});

reviewSchema.virtual('id')
  .get(function() {
    return this._id.toHexString();
  });

reviewSchema.set('toJSON', {
  virtuals: true
});

const Review = mongoose.model('Review', reviewSchema);
app.get('/api/reviews', async (req, res) => {
  try {
    let reviews = await Review.find();
    res.send({reviews: reviews});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/reviews', async (req, res) => {
  const review = new Review({
    customer: req.body.customer,
    product: req.body.product,
    rating: req.body.rating,
    review: req.body.review,
  });
  try {
    await review.save();
    res.send({review:review});
    console.log("POSTed");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/reviews/:id', async (req, res) => {
  try {
    let review = await Review.findOne({
      _id: req.params.id
    });
    review.rating = req.body.rating;
    review.review = req.body.review;

    await review.save();
    console.log('Edited');
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/reviews/:id', async (req, res) => {
  try {
    await Review.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
    console.log('DELETEd');
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));



/*
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const productSchema = new mongoose.Schema({
  product: String,
  price: String,
  material: String,
  rating: String,
});

productSchema.virtual('id')
  .get(function() {
    return this._id.toHexString();
  });

productSchema.set('toJSON', {
  virtuals: true
});

const Product = mongoose.model('Product', productSchema);
app.get('/api/products', async (req, res) => {
  try {
    let tickets = await Product.find();
    res.send({products: products});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/products', async (req, res) => {
  const product = new Product({
    product: req.body.product,
    price: req.body.price,
    material: req.body.material,
    rating: req.body.rating,
  });
  try {
    await product.save();
    res.send({product:product});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/products/:id', async (req, res) => {
  try {
    await Product.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
*/
