<template>
  <div>
    <div class="jumbotron">
    <SideBar></SideBar>
      <h1>ADD COURSE AND SUBJECTS</h1>
    </div>
    <center>
      <b-card text-align id="card" img-top tag="article" style="max-width: 30rem;" class="mb-2">
        <b-form-group label-size="lg" label-for="input-lg">
          <label id="course">Course:</label>
          <b-form-input v-model="input.course" id="course" size="lg"></b-form-input>
          <label id="subjects">Subjects:</label>
          <br>
          <b-form-input v-model="input.subjects" id="subjects" size="lg"></b-form-input>
          <br>
          <label id="room">Room:</label>
          <b-form-input v-model="input.room" id="room" size="lg"></b-form-input>
          <br>
          <b-button variant="primary" @click="addItem"
           >Add Subject And Course</b-button>
           <br><br>
           <br><br>
           <b-form-input v-model="deletecourse" id="delete" size="lg" placeholder="Type subject to remove"></b-form-input><br>
          <b-button variant="primary" @click="remove">Remove Subject</b-button>
        </b-form-group>
      </b-card>
      <b-card text-align id="card1" img-top tag="article" style="max-width: 40rem;" class="mb-2">
        <table class="table">
          <thead>
            <tr >
              <th scope="col">Courses</th>
              <th scope="col">Subjects</th>
              <th scope="col">Room</th>
            </tr>
          </thead>
         <tbody v-for="(item, index) in this.rows" :key="index">
            <tr >
              <td>{{ item.course }}</td>
              <td>{{ item.subjects}}</td>
              <td>{{ item.room }}</td>
            </tr>
          </tbody>
        </table>
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
        rows:[],
        deletecourse:"",
        input: {
        course: "",
        subjects: "",
        room: ""
      }
    }
  },
  methods: {
    addItem() {
      var object = {
        course: this.input.course,
        subjects: this.input.subjects,
        room: this.input.room
      };
      this.rows.push( object )
      this.input.course = ""
      this.input.subjects = ""
      this.input.room = ""
    },
    remove(){
      // var object = {
      //   course: this.input.course,
      //   subjects: this.input.subjects,
      //   room: this.input.room
      // };
      // this.rows.splice(object,1);
       for(let i = 0; i < this.rows.length; i++){
           if(this.rows[i].subjects === this.deletecourse){
              this.rows.splice(this.rows.indexOf(this.rows[i].subjects),1)
           }
           
        }
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