<template>
<div>
    <div class="flexmy">
       <button class="mybtn d-block btn-user " v-on:click="showdivin">
        <div class="fas fa-angle-down"></div>
          Заказы 
       </button>
       <button class="mybtn d-block btn-user" v-on:click="showdivout">
        <div class="fas fa-angle-down"></div>
          Расходы 
       </button>
    </div>
    <div v-show="OrderInShow">
      <transition name="fade">
        <OrderIn></OrderIn>
      </transition>
    </div>
    <div v-show="OrderoOutShow">
      <transition name="fade">
        <OrderOut></OrderOut>
      </transition>
    </div>
  </div>
</template>

<script>
import OrderIn from "@/components/OrderIn";
import OrderOut from "@/components/OrderOut";

    export default {
    components: {
      OrderOut, OrderIn
    },
      data () {
        return {
          OrderInShow: false,
          OrderOutShow: false
        }
      },
      methods:  {
        showdivin () {
          this.OrderInShow = true,
          this.OrderOutShow = false
        },
        showdivout () {
          this.OrderInShow = false,
          this.OrderOutShow = true
        }
      }
    }
</script>

<style>
.flexmy{
  display: flex;
}
.mybtn{
  background-color: #5779df;
  text-align:start;
  border-radius: 0;
  color: rgba(255, 255, 255, 0.76);
  height: 50px;
  width: 50%;
}.mybtn:hover{
  color: white; 
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>