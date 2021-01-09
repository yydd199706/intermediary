<template>
  <div class="wrap">
    <div class="btn" style=" position: fixed; right: 0; top: 100px;">
      <div v-for="i in letters" :key="i" @click="lett(i.id)">{{i.id}}</div>
    </div>
    <scroll-view scroll-y :scroll-top='scrollTop' :scroll-into-view='toView' style="height:50px">
      <div :id="i.id" v-for="i in letters" :key="i">{{i.name}}</div>
    </scroll-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        toView: '',
        scrollTop: 0,
        letters: [{id: 'A',name: 'AA'}, {id: 'B',name: 'BB'}, {id: 'C',name: 'CC'}, {id: 'D',name: 'DD'}, {id: 'E',name: 'EE'}]
      }
    },
    methods: {
      lett(l) {
        this.toView = l
      }
    }
  }
</script>

<style scoped>

</style>
