<template>
  <div id="nav">

  </div>
  <router-view/>
</template>

<script>

export default {
  data(){
    return{}
  },
  computed:{}
}
</script>


<style>
body{

}
.btn{
  display:inline-block;
  cursor:pointer;
  font-size:20px;
  width:200px;
  border: 1px solid #50964e;
  
  /* border-radius: 20px; */
}
  .btn:hover{
  background:rgba(154, 212, 107, 0.452)
  }
a{
  text-decoration: none;
  cursor:pointer;
  color:#50964e
  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

</style>
