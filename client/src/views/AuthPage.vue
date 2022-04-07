<template lang="pug">
AuthUI(v-show="authORreg == false" @regComp="regTran()")
RegUI(v-show="authORreg == true")
</template>
<script>
import AuthUI from "@/components/UI/AuthUI/AuthUI.vue"
import RegUI from "@/components/UI/RegUI/RegUI.vue"

export default {
    data(){
            return{
                authORreg: false,
            }
        },
        methods: {
            regTran(){
                this.authORreg = !this.authORreg
            }
        },
        
        components: {
            AuthUI,RegUI
        },
}
</script>
<style lang="scss">
    
</style>