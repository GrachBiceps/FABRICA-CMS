<template>
  <div>
    <div v-show="OrderInShow">
      <transition name="fade">
        <OrderIn></OrderIn>
      </transition>
    </div>
    <div v-show="OrderOutShow">
      <transition name="fade">
        <OrderOut></OrderOut>
      </transition>
    </div>
  </div>
</template>

<script>
import OrderIn from '@/components/Accountant/OrderIn';
import OrderOut from '@/components/Accountant/OrderOut';
import {mapState} from 'vuex';

export default {
  components: {
    OrderOut,
    OrderIn,
  },
  computed:{
   ...mapState({
      OrderInShow: state => state.sidebar.OrderInShow,
      OrderOutShow: state => state.sidebar.OrderOutShow
   })
   }
}
</script>

<style>
.flexmy {
  display: flex;
}
.mybtn {
  background-color: #5779df;
  text-align: start;
  border-radius: 0;
  color: rgba(255, 255, 255, 0.76);
  height: 50px;
  width: 50%;
  text-align: center;
  margin: 10px;
}
.mybtn:hover {
  color: white;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
