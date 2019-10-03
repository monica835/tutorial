<template>
  <div id="container">
  <SideBar></SideBar>
    <div class="jumbotron">
      <h1>Personal Information</h1>
    </div>
    <div id="card">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img :src="require('assets/user.jpg')" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Personal Info">
                <hr>
              <b-card-text>
                <h6>Username: {{username}}</h6>
                 <h6 type="password">Password: {{password}}</h6>
                <h6 type="password">Confirm Password: {{confirmpassword}}</h6>
              </b-card-text>
              <button @click='update' class="btn login_btn" >Update</button>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>
<style>
.jumbotron{
    padding: 20px;
    text-align: center;
    background-color:lightblue;
}
#card {
  margin-top: 50px;
  margin-left: 600px;
  margin-right:600px;
  box-shadow: 10px 10px 5px blue; 
  
}
.login_btn{
    color: black;
    background-color: #FFC312;
    width: 100px;
}
</style>
<script>
import AUTH from 'services/auth'
import SideBar from 'components/frame/SideBar.vue'
export default {
  components:{
    SideBar
  },
  name: "container",
  data() {
    return {
      username: sessionStorage.getItem("username"),
      password: sessionStorage.getItem("password"),
      confirmpassword: sessionStorage.getItem("confirmpassword")
    };
  },
  methods:{
    update: function(){
      AUTH.update(this.username,this.password, this.confirmpassword)
    }
  }
};
</script>