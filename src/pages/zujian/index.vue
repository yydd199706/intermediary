<template>
  <div class="mpvue-picer">
    <button @click="showPicker">test for mpvuePicker</button>
    <mpvue-picker ref="mpvuePicker" :pickerValueArray="sexValueArray" :pickerValueDefault='pickerValueDefault' @onConfirm="onConfirm"></mpvue-picker>
  </div>
</template>


<script>
import mpvuePicker from "@/../static/components/mpvue-picker/mpvuePicker.vue";
 
 export default {
  components: {
    mpvuePicker
  },
  data() {
    return {
      sexValueArray:[
        {label:'男',value:0},{label:'女',value:1}
        ],
      pickerValueDefault: [1]
    };
  },
  methods: {
    showPicker() {
      this.$refs.mpvuePicker.show();
      
    },
    onConfirm(e) {
      console.log(e);
    }
  }
};

</script>

<style scoped>
 
</style>
