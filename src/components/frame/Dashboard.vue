<template>
  <div>
  <SideBar></SideBar>
    <div class="jumbotron">
      <h1>Dashboard</h1>
    </div>
    <div id="card">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <center>
          <b-card-img id="image" :src="require('assets/user.jpg')" class="rounded-0"></b-card-img>
          <b-row no-gutters>
            <b-card-body>
              <h1>HI {{username}}</h1>
              <h3>Welcome to Kat-ON</h3>
            </b-card-body>
          </b-row>
        </center>
      </b-card>
    </div>
  </div>
</template>

<style scoped>
#card {
  margin-top: 30px;
  margin-left: 800px;
  margin-right:800px;
  box-shadow: 10px 10px 5px blue; 
}
.jumbotron{
    padding:20px;
    text-align: center;
    background-color:grey;
}
#image {
  width: 250px;
  height: 220px;
}
</style>

<script>
import SideBar from 'components/frame/SideBar.vue'
export default {
  components: {
    SideBar
  },
  name: "card",
  data() {
    return {
      username: sessionStorage.getItem("username")
    };
  },
};
</script>