<template>
<div >
    <ul>
        <li v-for="item in array" :key="item">
            {{ item.name }}
            {{item.coutn}}
            
  </li>
    </ul>
</div>
</template>

<script>
export default {
    data(){ 
        return{
    array:[{name:"fdfd",coutn:"0"},{name:"fdfd",coutn:"1"},{name:"fdfd",coutn:"23"},{name:"fdfd",coutn:"34"}]
   
    }
    }
}

</script>

<style>

</style>