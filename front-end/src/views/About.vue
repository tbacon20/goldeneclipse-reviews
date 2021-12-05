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
      <h3><span class="name">Name: {{review.customer}}</span></h3>
      <p><span class="product">{{review.product}}</span></p>
      <p><span class="rating">{{review.rating}} star rating</span></p>
      <p><span class="review">{{review.review}}</span></p>
      <button @click="deleteReview(review)" class="deleteButton">Delete Review</button>

      <h3>Update Review:</h3>
      <input v-model="newRating" placeholder="Rating (out of 5)">
      <input v-model="newReview" placeholder="Review">
      <button @click="editReview(review)">Update Review</button>
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

  <!--h2>Had the product for a while? Update your review here:</h2>






  <div class="edit">
      <div class="form">
          <input v-model="findCustomer" placeholder="Search">
          <div class="suggestions" v-if="suggestions.length > 0">
              <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">{{s.title}}
              </div>
          </div>
      </div>
      <div class="upload" v-if="findReview">
          <input v-model="findReview.customer">
          <input v-model="findReview.product" placeholder="New Description">
      </div>
      <div class="actions" v-if="findReview">
          <button @click="editReview(findReview)">Edit</button>
      </div>
  </div>













  <input v-model="findCustomer" placeholder="Search Customer">

  <div class="reviews">
    <div class="review" v-if="review.customer == findReview" :key="review.id">
      <p><span class="name">Name: {{review.customer}}</span></p>
      <p><span class="product">{{review.product}}</span></p>
      <input v-model="newRating" placeholder="Rating (out of 5)">
      <input v-model="newReview" placeholder="Review">
      <button @click="editReview(review)">Post Review</button>
    </div>
  </div-->

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
      newRating: "",
      newReview: "",

/*
      findCustomer: "",
      findProduct: "",
      findRating: "",
      findReview: "",*/
    }
  },
  computed: {
/*    suggestions() {
      let reviews = this.reviews.filter(review => review.customer.toLowerCase().startsWith(this.findCustomer.toLowerCase()));
      return reviews.sort((a, b) => a.customer > b.customer);
    } */
  },
  created() {
    this.getReviews();
  },
  methods: {
/*    selectReview(review) {
      this.findCustomer = "";
      this.findProduct = "";
      this.findRating = "";
      this.findReview = review;
    },*/
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
          rating: this.newRating,
          review: this.newReview,
        });
        this.findReview = null;
        this.getReviews();
        console.log('edited');
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
