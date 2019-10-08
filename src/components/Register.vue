<template>
<div class="container">
    <div class="d-flex justify-content-center h-100">
        <div class="card">
            <div class="card-header">
                <h3>Register</h3>
                <div class="d-flex justify-content-end social_icon">
                    <span><i class="fab fa-facebook-square"></i></span>
                    <span><i class="fab fa-google-plus-square"></i></span>
                    <span><i class="fab fa-twitter-square"></i></span>
                </div>
            </div>
            <div class="card-body">
                <form @submit="onsubmit">
                    <div class="input-group form-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-user"></i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="username" name="username" v-model="input.username" required>
                    </div>
                     <div class="input-group form-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-user"></i></span>
                        </div>
                        <input type="email" class="form-control" placeholder="email" name="email" v-model="input.email" required>
                    </div>
                    <div class="input-group form-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-key"></i></span>
                        </div>
                        <input type="password" class="form-control" name="password" placeholder="password" v-model="input.password" required>
                    </div>
                    <div class="input-group form-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-key"></i></span>
                        </div>
                        <input type="password" class="form-control" name="confirmpassword" placeholder="confirm password" v-model="input.confirmpassword" required>
                    </div>
                    <div class="row align-items-center remember">
                        <input type="checkbox">Remember Me
                    </div>
                    <div class="form-group">
                        <input type="submit" value="Submit" class="btn float-right login_btn" >
                    </div>
                </form>
            </div>
            <!-- <div class="card-footer">
                <div class="d-flex justify-content-center links">
                    Don't have an account?<a href='/register'>Sign Up</a>
                </div>
                <div class="d-flex justify-content-center">
                    <a href="#">Forgot your password?</a>
                </div>
            </div> -->
        </div>
    </div>
</div>
</template>

<style scoped>
html,
body {
    background-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: auto;
    font-family: 'Numans', sans-serif;
}

.container {
    height: 100%;
    align-content: center;
    margin-top: 5%;
}

.card {
    height: 400px;
    margin-top: auto;
    margin-bottom: auto;
    width: 400px;
    background-color: rgba(0, 0, 0, 0.5) !important;
}

.social_icon span {
    font-size: 60px;
    margin-left: 10px;
    color: #FFC312;
}

.social_icon span:hover {
    color: white;
    cursor: pointer;
}

.card-header h3 {
    color: white;
    margin-left: -50%;
}

.social_icon {
    position: absolute;
    right: 20px;
    top: -45px;
}

.input-group-prepend span {
    width: 50px;
    background-color: #FFC312;
    color: black;
    border: 0 !important;
}

input:focus {
    outline: 0 0 0 0 !important;
    box-shadow: 0 0 0 0 !important;
}

.remember {
    color: white;
}

.remember input {
    width: 20px;
    height: 20px;
    margin-left: 15px;
    margin-right: 5px;
}

.login_btn {
    color: black;
    background-color: #FFC312;
    width: 100px;
}

.login_btn:hover {
    color: black;
    background-color: white;
}

.links {
    color: white;
}

.links a {
    margin-left: 4px;
}
</style>

<script>
import AUTH from 'services/auth'
import jquery from 'jquery'
export default {
    name: 'register',
	auth:AUTH,
    data() {
        return {
            input: {
                username: "",
                email:"",
                password: "",
                confirmpassword: ""
            }
        }
    },
    methods: {
        onsubmit(e) {
            e.preventDefault();
            sessionStorage.setItem("username", this.input.username)
            sessionStorage.setItem("password", this.input.email)
            sessionStorage.setItem("password", this.input.password)
            sessionStorage.setItem("confirmpassword",this.input.confirmpassword)
            AUTH.register(this.input.username, this.input.password,this.input.confirmpassword)
            //let link=`http://localhost:3000/db/update/${this.input.username}/${this.input.email}/${this.input.password}`
            let link=`http://localhost:3000/db/create/${this.input.username}/${this.input.email}/${this.input.password}`
            //let link=`http://localhost:3000/db/delete`
            //let link=`http://localhost:3000`
            jquery.ajax({
                url:link,
                method:'GET',
                headers:{
                    'Access-Control-Allow-Origin':'*'
                }
            }).then(response=>{
                alert(response.username)
            })       
        }
    },
   
}
</script>
