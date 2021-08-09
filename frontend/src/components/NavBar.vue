<template>
<div style="display: flex">
<div v-show="NavHide" class="mynavbar align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
  <nav class="navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary w100 p-0">
     <div class="container-fluid d-flex flex-column p-0">
       <button class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" @click="$router.push('/')">
         <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-laugh-wink"></i></div>
          <div class="sidebar-brand-text mx-3"><span>Фабрика</span></div>
       </button>
     <hr class="sidebar-divider my-0">
        <ul class="navbar-nav text-light" id="accordionSidebar">
            <li class="nav-item"><button class="nav-link" @click="$router.push('/myinfo')" ><i class="fas fa-tachometer-alt"></i><span>Инфо</span></button></li>
            <li class="nav-item"><button class="nav-link" @click="$router.push('/storage')" ><i class="fas fa-user"></i><span>Склад</span></button></li>
            <li class="nav-item"><button class="nav-link" @click="$router.push('/orders')" ><i class="fas fa-table"></i><span>Бугалтерия</span></button></li>
        </ul>
      
      </div>
  </nav>
</div>
  <!-- <div class="text-center d-none btn-grach d-md-inline"><button v-on:click="HideBar" class="btn btn-grach border-0" id="sidebarToggle" type="button"></button></div> -->
</div>
</template>

<script>
    export default {
      data () {
        return {
          NavHide: true
        }
      },
      methods:  {
        HideBar () {
          this.NavHide = !this.NavHide
        }
      }
    }
</script>

<style>
.btn-grach{
  width: 60px;
  height: 70px;
   background: #5779df;
}
button{
  background: none;
    border: none;
}
.mynavbar{
    padding-top: 0;
    padding-bottom: 0;
}
.w100{
  height:100%;
}
</style>