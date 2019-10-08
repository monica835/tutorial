<template>
  <div>
    <div class="jumbotron">
    <SideBar></SideBar>
      <h1>ADD COURSE AND SUBJECTS</h1>
    </div>
    <center>
      <b-card text-align id="card" img-top tag="article" style="max-width: 30rem;" class="mb-2">
        <b-form-group label-size="lg" label-for="input-lg">
          <label id="post">Post</label>
          <b-form-textarea v-model="input.post" id="post" size="lg"></b-form-textarea>

          <b-button variant="primary" @click="addpost"
           >Post</b-button>
           <br><br>
           <br><br>
           <!-- <b-form-input v-model="deletecourse" id="delete" size="lg" placeholder="Type subject to remove"></b-form-input><br>
          <b-button variant="primary" @click="remove">Remove Subject</b-button> -->
        </b-form-group>
      </b-card>
      <b-card text-align id="card1" img-top tag="article" style="max-width: 40rem;" class="mb-2">
            <tr >
              <th scope="col">Post</th>
            </tr>
         <b-form v-for="(item, index) in this.post" :key="index">
            <tr >
                <td>{{username}}</td>
              <td>{{ item.post }}</td><b-button variant="primary" @click="remove">Remove </b-button>
            </tr>
          </b-form>
        <br>
</b-card>
</center> 
</div>
</template>


<style>
#card {
  margin-top: 20px;
  margin-right:30%;
  margin-left:30%;
  background-color: rgba(0, 0, 0, 0.5) !important;
}
.jumbotron {
  padding: 20px;
  text-align: center;
   background-color:lightblue;
}
th{
  background-color:lightblue;
}
</style>
<script>
import SideBar from 'components/frame/SideBar.vue'
export default {
  components:{
    SideBar
  },
   data() {
    return {
        post:[],
        input: {
        post: "",
      }
    }
  },
  methods: {
    addpost() {
      var object = {
        post: this.input.post,
        
      };
      this.post.push( object )
      this.input.post= ""
        //let link=`http://localhost:3000/db/update/${this.input.username}/${this.input.email}/${this.input.password}`
        let link=`http://localhost:3000/db/create/${this.input.text}`
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
     
    },
    remove(){
      var object = {
        course: this.input.course,
        
      };
      this.post.splice(object,1);
    //    for(let i = 0; i < this.post.length; i++){
    //        if(this.post[i].subjects === this.deletecourse){
    //           this.post.splice(this.post.indexOf(this.post[i].subjects),1)
    //        }
           
    //     }
    },
    Edit(){
      var docs = document.getElementById('editModal');
      docs.style.display='block'
      },
      close(){
          var editM = document.getElementById('editModal')
				editM.style.display = "none";
				this.count--
      },
    submitEdit(){
      for(var i = 0; i< this.rows.length; i++){
					if(this.rows[i].courseName == this.newcourseName){
            this.rows[i].courseName = this.input.courseName
            this.rows[i].courseName = this.input.courseName
						this.rows[i].year = this.input.year
						var row = document.getElementById('row');
						row.cells[0].innerHTML = this.input.newcourseName
						row.cells[1].innerHTML = this.rows[i].year
					}
				}
				var editM = document.getElementById('editModal')
				editM.style.display = "none";
    }
    }
};
</script>