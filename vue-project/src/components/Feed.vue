<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <div class="row">
    <div class="leftcolumn">
      <div class="card" v-for="data in data" :key="data.id">
        <router-link :to="'/post/'+data.title"><h2>{{data.title}}</h2></router-link>
        <h5>{{data.date}}</h5>
        <div class="resumen" style="height:200px;">
          <p>{{data.author}}</p>
          <p>{{data.body}}</p>
        </div>
      </div>
    </div>
    <div class="rightcolumn">
      <div class="card">
        <h3>Destacados</h3>
        <div class="card" v-for="data in outst" :key="data.id">
          <div class="resumen"><p>{{ data.body }}</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../components/data.json'
export default {
  name: "Row",
  data(){
    return{data}
  },
  computed: {
    outst(){
      return this.data.filter(data => data.outstanding === "true")
    }
  }
}
</script>

<style scoped>

</style>