<template>
<div class="container">
    <div class="add">
        <div class="box-header">
            <h3 class="box-title">Add person</h3>
        </div>
    </div>
    
    <div class="card">
            <router-link class="btn btn-primary ml-8px buttonBack" :to="{path: '/'}">
                back to list
            </router-link>
            <div class="card-body">
                <form v-on:submit.prevent="addPerson">
                    
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
                        <input type="submit" class="btn btn-primary buttonAdd" value="Add Person"/>
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
      name: 'AddPerson'
  },
  firebase: {
    people: db.ref('people'),
  },
  data () {
    return {
      newPerson: {
          Name: '',
          Email: '',
          ZIP: '',
          Country: '',
          Street: '',
          City: '',
      }
    }
  },   
  methods: {
    addPerson() {
        db.ref('people').push({
            Name: this.newPerson.Name,
            Email: this.newPerson.Email,
            ZIP: this.newPerson.ZIP,
            Country: this.newPerson.Country,
            Street: this.newPerson.Street,
            City: this.newPerson.City    
        })
        this.$router.push('/')
    }
  }
}
</script>
<style>
    .buttonBack{
    float:left;
    background-color:#2c3e50 !important; 
    border-color:#2c3e50 !important;
    margin-top: 20px !important;
    margin-bottom: 20px !important;
    color : white;
    }
    .buttonAdd{
    background-color:#2c3e50 !important; 
    border-color:#2c3e50 !important;
    margin-top: 20px !important;
    margin-bottom: 20px !important;
    color : white;    
    }
</style>