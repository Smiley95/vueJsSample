<template>
  <div class="container" id="app">
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
    <router-view/>
  </div>
</template>

<style lang="css">
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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
    margin-bottom: 20px !important;
}
</style>
