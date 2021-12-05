<template>
<div>
  <div class="container">
    <div class="cover">
      <img class="cover-image" alt="golden eclipse products" :src="cover">
    </div>
  </div>
  <h1>Customer Reviews</h1>

  <div class="reviews">
    <div class="review" v-for="review in reviews" :key="review.id">
      <p><span class="name">Name: {{review.customer}}</span></p>
      <p><span class="product">{{review.product}}</span></p>
      <p><span class="rating">{{review.rating}} star rating</span></p>
      <p><span class="review">{{review.review}}</span></p>
      <button @click="deleteReview(review)" class="deleteButton">Delete</button>
    </div>
  </div>

  <h2>Add a review here:</h2>
  <div class="form">
    <input v-model="customer" placeholder="Customer Name">
    <input v-model="product" placeholder="Product">
    <input v-model="rating" placeholder="Rating (out of 5)">
    <input v-model="review" placeholder="Review">
    <button @click="upload">Post Review</button>
  </div>

  <h2>Had the product for a while? Update your review here:</h2>

  <div class="reviews">
    <div class="review" v-for="review in reviews" :key="review.id">
      <p><span class="name">Name: {{review.customer}}</span></p>
      <p><span class="product">{{review.product}}</span></p>
      <input v-model="findRating" placeholder="Rating (out of 5)">
      <input v-model="findReview" placeholder="Review">
      <button @click="editReview(review)">Post Review</button>
    </div>
  </div>

</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      cover: require('/images/cust_notes.jpg'),
      reviews: [],
      customer: "",
      product: "",
      rating: "",
      review: "",

      addReview: null,
      findCustomer: "",
      findProduct: "",
      findRating: "",
      findreview: "",
    }
  },
  created() {
    this.getReviews();
  },
  methods: {
    async getReviews() {
      try {
        let response = await axios.get("/api/reviews");
        this.reviews = response.data.reviews;
        console.log(this.reviews);
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async upload() {
      try {
        let r = await axios.post('/api/reviews', {
          customer: this.customer,
          product: this.product,
          rating: this.rating,
          review: this.review
        });
        this.addReview = r.data;
        window.location.reload();
        // r.data.reviews if necessary
      } catch (error) {
        console.log(error);
      }
    },
    async editReview(review) {
      try {
        await axios.put("/api/reviews/" + review._id, {
          rating: this.findReview.rating,
          review: this.findReview.review,
        });
        this.findReview = null;
        this.getReviews();
        window.location.reload();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteReview(review) {
      try {
        await axios.delete("/api/reviews/" + review._id);
        console.log("DELETEd");
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  },
}
</script>

<style>
.container {
 display: flex;
 width: 80%;
 margin: 0 auto;
}

.cover {

}

.cover-image {
  width: 100%;
  object-fit: cover;
}

.reviews {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  justify-content: space-around;
}

.review {
  background-color: #E3BF6A;
  width: 200px;
  margin-bottom: 10px;
  padding: 5px;
}

.name {
  font-weight: bold;
}
.product {
  font-style: oblique;
}

.deleteButton {
  margin-bottom: 5px;
}

input {
  margin: 5px;
}

</style>
