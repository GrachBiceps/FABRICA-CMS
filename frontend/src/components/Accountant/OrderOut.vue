<template>
  <div class="m-3 wrap py-1">
    <TabGroup>
      <TabList class="flex p-1 space-x-1 tab-tabmy ">
          <button v-on:click="showstoragein"
            :class="[
              'w-full py-2.5 text-sm leading-5 font-medium ',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400  ring-opacity-60',
              selected
                ? 'text-gray-700 bg-white shadow '
                : 'text-gray-200 opacity-75 hover:bg-gray-400/[0.12] hover:text-gray-500',
            ]"
          >
            Приход товара
          </button>
          <button v-on:click="others"
            :class="[
              'w-full py-2.5 text-sm leading-5 font-medium ',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400  ring-opacity-60',
              selected
                ? 'text-gray-700 bg-white shadow '
                : 'text-gray-200 opacity-75 hover:bg-gray-400/[0.12] hover:text-gray-500',
            ]"
          >
            Прочее
          </button>
      </TabList>
      <StorageIINShow class="mt-4" v-show="StorageINShow"></StorageIINShow>
      <Others v-show="Others"></Others>
    </TabGroup>
  </div>
</template>

<script>
import { ref } from 'vue'
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
  setup() {
    let categories = ref({
      Recent: [
        {
          ShowId: 'storageingg',
        },
      ],
      Popular: [
        {
          id: 1,
          title: 'Is tech making coffee better or worse?',
          date: 'Jan 7',
          commentCount: 29,
          shareCount: 16,
        },
        {
          id: 2,
          title: 'The most innovative things happening in coffee',
          date: 'Mar 19',
          commentCount: 24,
          shareCount: 12,
        },
      ],
      Trending: [
        {
          id: 1,
          title: 'Ask Me Anything: 10 answers to your questions about coffee',
          date: '2d ago',
          commentCount: 9,
          shareCount: 5,
        },
        {
          id: 2,
          title: "The worst advice we've ever heard about coffee",
          date: '4d ago',
          commentCount: 1,
          shareCount: 2,
        },
      ],
    })

    return { categories }
  },
}
</script>
<style>
.tab-tabmy{
background: #5779df;}
</style>