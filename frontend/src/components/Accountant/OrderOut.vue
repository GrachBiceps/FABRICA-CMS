<template lang='pug'>
div.m-3.wrap.py-1
  div.grid.grid-cols-2.p-1.gap-8.m-4.mb-6
    button(@click="showstoragein").py-3.text-sm.neoismflat.ml-4 Закупка товаров
    button(@click="others").py-3.text-sm.neoismflat.mr-4 Прочее
  StorageIINShow(v-show="StorageINShow")
  Others(v-show="Others")
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import StorageIINShow from '/src/components/Storage/Storage-Accountant/StorageINShow.vue'
import Others from '/src/components/Storage/Storage-Accountant/Others.vue'

export default {
  data () {
    return {
      StorageINShow: false,
      Others: false,
    }
  },
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    StorageIINShow,
    Others
  },
  methods:{
    showstoragein() {
      (this.StorageINShow = true), (this.Others = false)
    },
    others() {
      (this.StorageINShow = false), (this.Others = true)
    }
  },

}
</script>
<style>
.tab-tabmy{
background: #5779df;}
</style>