<template>
  <div class="indexstyle">
   <!-- 带看报备开始  -->
   <block v-for="(item, index) in lists" :key="index">

    <input class='create-li' data-id="{index}" value='lists[index][0]' placeholder="选项1" bindinput='bindKeyInput'>

    <input class='create-li' data-id="{index}" value='lists[index][1]' placeholder="选项2" bindinput='bindKeyInput2'>

    </block>

    <button class='add-li' bindtap='addList'>添加选项</button>

    <button class='add-li' bindtap='delList'>删除选项</button>
 

  
  </div>
</template>

<script>
 
  export default {
 
    data() {
      return {
       hiddenmodalput: true,
       lists: [
         {index:1},
         {index:1}
         ],
       text:"",
        

 
      }
    },
    methods: {
      addList: function () {
        var lists = this.data.lists;
        var newData = {};
        lists.push(newData);//实质是添加lists数组内容，使for循环多一次
        this.setData({
        lists: lists,
        })
      },

      delList: function () {
        var lists = this.data.lists;
        lists.pop(); //实质是删除lists数组内容，使for循环少一次
        this.setData({
        lists: lists,
        })
      },

      bindKeyInput: function (e) {
        var that = this;        
        var index = e.currentTarget.dataset.id;//使用event.currentTarget.dataset.XX获取内容
        that.setData({
        text : e.detail.value
        })
        that.data.lists[index][0] =that.data.text;
        console.log("index1", index);
        console.log("e", e.detail.value);
        console.log("text", that.data.text);
        console.log("value1", that.data.lists[index][0]);
        },

        bindKeyInput2: function (e) {
        var that = this;
        var index2 = e.currentTarget.dataset.id;//使用event.currentTarget.dataset.XX获取内容
        that.setData({
        text: e.detail.value
        })
        that.data.lists[index2][1] = that.data.text;
        console.log("index2", index2);
        console.log("e2", e.detail.value);
        console.log("text", that.data.text);
        console.log("value2", that.data.lists[index2][1]);
        },
 

      
 
    }



  }

</script>



<style scoped>
.clear {
  clear: both;
  height: 0;
  display: block;}
.fl{ float: left;}
.fr{ float: right;}
.hsxian{ width: 100%; height:10px; background: #f8f8fa;}
.indexstyle{width: 100%; margin: 0 auto; background: #0a8de4;}

/* 带看报备开始 */
 input{ width: 100%; height: 80rpx;}


</style>
