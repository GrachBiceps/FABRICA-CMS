<template>
       <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
            <div class="container-fluid d-flex flex-column p-0"><a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                    <div class=" rotate-n-15"><i class="fas fa-laugh-wink"></i></div>
                    <div class="sidebar-brand-text mx-3"><span>ФАБРИКА-КУХНЯ</span></div>
                </a>
                <hr class="sidebar-divider my-0">
                <MyNavButton v-model='items.title' @click="$router.push('/storage')"></MyNavButton>
                <MyNavButton v-model='items.title' @click="$router.push('/storage')"></MyNavButton>
                <MyNavButton v-model='items.title' @click="$router.push('/storage')"></MyNavButton>
                <div class="text-center d-none d-md-inline"><button class="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
            </div>
        </nav>
</template>

<script>
import MyNavButton from "@/components/UI/MyNavButton.vue"

    export default {
         data() {
        return {
      items: {
        title: 'Ифвфывфы'
      }
    }},
        components: {
            MyNavButton
        }
    }
</script>

<style scoped>


</style>