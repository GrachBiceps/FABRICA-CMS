<template>
  <div>
    <div>
    <AddItem></AddItem>
    </div>
    <MyTable></MyTable>
  </div>
</template>

<script>
import MyTable from "@/components/MyTable";
import AddItem from "@/components/AddItem";
    export default {
    components: {
      MyTable, AddItem
    }
        
    }
</script>

<style>

</style>