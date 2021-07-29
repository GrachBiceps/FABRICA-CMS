<template>
<div >
    <ul>
        <li v-for="item in array" :key="item">
            {{ item.name }}
            {{item.coutn}}
        <div id="NavBar" ></div>
            
  </li>
    </ul>
</div>
</template>

<script>
import NavBar from "@/components/NavBar"
export default {
    components:{
    NavBar

    },
    data(){ 
        return{
    array:[{name:"fdfd",coutn:"0"},{name:"fdfd",coutn:"1"},{name:"fdfd",coutn:"23"},{name:"fdfd",coutn:"34"}]
   
    }
    }
}

</script>

<style>

</style>