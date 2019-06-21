<template>
  <div class="people">
    <div class="box-header">
            <h3 class="box-title">People</h3>
        </div>
        <router-link class="btn btn-primary ml-20px button" :to="{path: '/add'}">
             Add Person
        </router-link>
        <input class="filter" type="text" v-model="searchZIP" placeholder="ZIP filter"/>
        <div class="box-body">
            <table id="peopleList" class="table table-bordered table-hover">
                <thead>
                <tr >
                    <th v-for="col in columns" ><i class="fas fa-sort-amount-up" v-on:click="resortPeople(col)"></i>{{col}}</th>
                    <th>Update/Delete</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="person in filteredPeople" v-bind:key="person.ID">
                        <td>{{person.Name}}</td>
                        <td>{{person.Email}}</td>
                        <td>{{person.Street}}</td>
                        <td>{{person.City}}</td>
                        <td>{{person.ZIP}}</td>
                        <td>{{person.Country}}</td>
                        <td>
                            <router-link class="btn btn-primary ml-8px" :to="{name: 'Edit', params: {ID:person['.key']} }" style="color:white;!important">
                            <i class="fas fa-user-edit"></i>
                            </router-link>
                            <button class="btn btn-danger" v-on:click="deletePerson(person['.key'])"><i class="fas fa-trash-alt" ></i></button>
                            
                            </router-link>
                        </td>
                    </tr>    
                </tbody>
            </table>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase/firebase';
export default {
  name: 'People',
  data: () => ({ people: [], searchZIP:'', sortDirection: 'ASC',
    sortBy: 'Name',
  columns:['Name','Email','Street','City','ZIP','Country']
   }),

  firebase: {
    people: db.ref('people'),
  },
  computed: {
    filteredPeople:function(){
      return this.people.filter((person) => {
        return String(person.ZIP).match(this.searchZIP);
        });
    }
  },   
  methods: {
    deletePerson(key) {
      db.ref('people/' + key).remove();
    },
    resortPeople( by ){
      if( by == this.sortBy ){
        if( this.sortDirection == 'ASC' ){
          this.sortDirection = 'DESC';
        }else{
          this.sortDirection = 'ASC';
        }
      }
      if( by != this.sortBy ){
        this.sortDirection = 'ASC';
        this.sortBy = by;
      }
      switch( this.sortBy ){
        case 'Name':this.sortByName();
        break;
        case 'Street':this.sortByStreet();
        break;
        case 'Country':this.sortByCountry();
        break;
        case 'City':this.sortByCity();
        break;
        case 'Email':
        this.sortByEmail();
        break;
        case 'ZIP':
          this.sortByInt();
        break;
      }
    },
    sortByName(){  
      this.people.sort( function( a, b ){
        if( this.sortDirection == 'ASC' ){
          return ( ( a.Name == b.Name ) ? 0 : ( ( a.Name > b.Name ) ? 1 : -1 ) );
        }
        if( this.sortDirection == 'DESC' ){
          return ( ( a.Name == b.Name ) ? 0 : ( ( a.Name < b.Name ) ? 1 : -1 ) );
        }
      }.bind(this));
    },
    sortByEmail(){  
      this.people.sort( function( a, b ){
        if( this.sortDirection == 'ASC' ){
          return ( ( a.Email == b.Email ) ? 0 : ( ( a.Email > b.Email ) ? 1 : -1 ) );
        }
        if( this.sortDirection == 'DESC' ){
          return ( ( a.Email == b.Email ) ? 0 : ( ( a.Email < b.Email ) ? 1 : -1 ) );
        }
      }.bind(this));
    },
    sortByCity(){  
      this.people.sort( function( a, b ){
        if( this.sortDirection == 'ASC' ){
          return ( ( a.City == b.City ) ? 0 : ( ( a.City > b.City ) ? 1 : -1 ) );
        }
        if( this.sortDirection == 'DESC' ){
          return ( ( a.City == b.City ) ? 0 : ( ( a.City < b.City ) ? 1 : -1 ) );
        }
      }.bind(this));
    },
    sortByStreet(){  
      this.people.sort( function( a, b ){
        if( this.sortDirection == 'ASC' ){
          return ( ( a.Street == b.Street ) ? 0 : ( ( a.Street > b.Street ) ? 1 : -1 ) );
        }
        if( this.sortDirection == 'DESC' ){
          return ( ( a.Street == b.Street ) ? 0 : ( ( a.Street < b.Street ) ? 1 : -1 ) );
        }
      }.bind(this));
    },
    sortByCountry(){  
      this.people.sort( function( a, b ){
        if( this.sortDirection == 'ASC' ){
          return ( ( a.Country   == b.Country  ) ? 0 : ( ( a.Country  > b.Country  ) ? 1 : -1 ) );
        }
        if( this.sortDirection == 'DESC' ){
          return ( ( a.Country   == b.Country  ) ? 0 : ( ( a.Country  < b.Country  ) ? 1 : -1 ) );
        }
      }.bind(this));
    },
    sortByInt(){
      
      this.people.sort( function( a, b ){
        if( this.sortDirection == 'ASC' ){
          return parseInt( a.ZIP ) < parseInt( b.ZIP ) ? 1 : -1;
        }

        if( this.sortDirection == 'DESC' ){
          return parseInt( a.ZIP ) > parseInt( b.ZIP ) ? 1 : -1;
        }
      }.bind(this));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-title{
    background-color:#2c3e50;
    color: white;
    margin-top: 20px;
    padding-top:20px;
    padding-bottom:20px;
}
.button{
    float:right;
    background-color:#2c3e50 !important; 
    border-color:#2c3e50 !important;
    margin-top: 20px !important;
    margin-bottom: 20px !important;
    color : white;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.filter{
  border-color:#2c3e50;
  margin: 20px;
  border-radius: 5%;
}
</style>
