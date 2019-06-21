<template>
  <div class="container">
        <div class="card">
            <div class="add">
        <div class="box-header">
            <h3 class="box-title">Add person</h3>
            </div>
        </div>
            <div class="card-body">
                <form v-on:submit.prevent="updatePerson">
                    <div class="form-group">
                        <label>Name:</label>
                        <input type="text" class="form-control" v-model="newPerson.Name"/>
                    </div>
                    <div class="form-group">
                        <label>Email:</label>
                        <input type="email" class="form-control" v-model="newPerson.Email"/>
                    </div>
                    <div class="form-group">
                        <label>Street:</label>
                        <input type="text" class="form-control" v-model="newPerson.Street"/>
                    </div>
                    <div class="form-group">
                        <label>City:</label>
                        <input type="text" class="form-control" v-model="newPerson.City"/>
                    </div>
                    <div class="form-group">
                        <label>ZIP:</label>
                        <input type="text" class="form-control" v-model="newPerson.ZIP"/>
                    </div>
                    <div class="form-group">
                        <label>Country:</label>
                        <input type="text" class="form-control" v-model="newPerson.Country"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary button" value="Update Person"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '@/firebase/firebase';
export default {
  components: {
      name: 'Edit'
  },    
  firebase: {
    people: db.ref('people')
  },
  data () {
    return {
      newPerson: {}
    }
  },
   created() {
       let ID = this.$route.params.ID;
       db.ref('people/'+ID).once('value', snapshot => {
        this.newPerson = snapshot.val()
        })
  },
  methods: {
    updatePerson() {
        this.$firebaseRefs.people.child(this.$route.params.ID).set(this.newPerson);
        this.$router.push('/')
    }
  }
}
</script>
<style>
.button{
    background-color:#2c3e50 !important; 
    border-color:#2c3e50 !important;
    margin-top: 20px !important;
    margin-bottom: 20px !important;
    color : white;
}
</style>