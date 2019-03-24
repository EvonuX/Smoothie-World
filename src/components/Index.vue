<template>
  <div class="index container">
    <p v-if="smoothies == 0">There are no smoothies added. Click on the pink "+" button to start!</p>
    <div class="smoothies">
      <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
        <div class="card-content">
          <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
          <h2 class="indigo-text">{{ smoothie.title }}</h2>
          <ul class="ingredients">
            <li v-for="(ing, index) in smoothie.ingredients" :key="index">
              <span class="chip">{{ ing }}</span>
            </li>
          </ul>
        </div>
        <span class="btn-floating btn-large halfway-fab pink waves-effect waves-light">
          <router-link :to="{ name: 'EditSmoothie', params: {smoothie_slug: smoothie.slug} }">
            <i class="material-icons edit">edit</i>
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "@/firebase/firebase";
export default {
  name: "Index",
  data() {
    return {
      smoothies: []
    };
  },
  methods: {
    deleteSmoothie(id) {
      firebase
        .collection("smoothie")
        .doc(id)
        .delete()
        .then(() => {
          this.smoothies = this.smoothies.filter(smoothie => {
            return smoothie.id != id;
          });
        });
    }
  },
  created() {
    firebase
      .collection("smoothie")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let smoothie = doc.data();
          smoothie.id = doc.id;
          this.smoothies.push(smoothie);
        });
      });
  }
};
</script>

<style>
.smoothies {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin-top: 60px;
}
.index p {
  text-align: center;
  margin-top: 20%;
  font-weight: bold;
  font-size: 2rem;
}
.index h2 {
  font-size: 1.8rem;
  text-align: center;
  margin-top: 0;
}
.index .ingredients {
  margin: 30px auto;
}
.index .ingredients li {
  display: inline-block;
}
.index .delete {
  position: absolute;
  right: 4px;
  top: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
@media screen and (max-width: 480px) {
  .index {
    grid-template-columns: 1fr;
  }
}
</style>
