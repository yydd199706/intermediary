<template>
  <div class="indexstyle">
    <div class="tabTop">
      <div @click="interestClick(index,$event)" v-for="(item,index) in tabArr" :key="index">
        <div :class="[indAction==index?'colors':'']">{{item.repaymentText}}</div>
        <div class="line" v-if="indAction==index?true:false"></div>
      </div>
      <!-- <div @click="principalClick">
        <div :class="[repaymentText=='等额本金'?'colors':'']">等额本金</div>
        <div class="line" v-if="repaymentText=='等额本金'?true:false"></div>
      </div> -->
    </div>
    <!-- <div class="listCenter">
      <div>
        <div class="listCenter_top">贷款总额</div>
        <div class="listCenter_price">{{monVal}}万</div>
      </div>
      <div>
        <div class="listCenter_top">支付利息</div>
        <div class="listCenter_price">{{payInterest}}万</div>
      </div>
      <div>
        <div class="listCenter_top">还款总额</div>
        <div class="listCenter_price">{{repayment}}万</div>
      </div>
      <div>
        <div class="listCenter_top">贷款年限</div>
        <div class="listCenter_price">{{yearText}}</div>
      </div>
    </div> -->

    <div class="my_kuang">
              <!-- 每月应还 -->
              <div class="s_yingh">
                <h1>还款总额</h1>
                <div class="jine">
                  <div class="qian">{{repayment}}万</div>
                </div>
              </div>
              <!-- 贷款总额 -->
              <div class="daikuan">
                <div>
                  <h2>贷款总额</h2>
                  <p>{{monVal}}万</p>
                </div>
                <div>
                  <h2>支付利息</h2>
                  <p>{{payInterest}}万</p>
                </div>
                <div>
                  <h2>贷款年限</h2>
                  <p>{{yearText}}</p>
                </div>
              </div>
            </div>
    <div class="adviser">
          <div class="adviser_header adviser_top">
            <span>期数</span>
            <span>月供总额</span>
            <span>月供本金</span>
            <span>月供利息</span>
            <span>剩余贷款</span>
          </div>
          <div
            class="adviser_bot"
             v-for="(item,index) in arrayObj" :key="index"
              :data-key="key"
          >
            <span>{{item.index}}</span>
            <span>{{item.supply}}</span>
            <span>{{item.principal}}</span>
            <span>{{item.interest}}</span>
            <span>{{item.surplus}}</span>
          </div>
      </div>
  </div>

</template>

<script>
const app = getApp();
 const common = require("@/utils/index");
  export default {
    data() {
      return {
        monVal:"",
        payInterest:"",
        repayment:"",
        yearText:"",
        repaymentText:"",
        rateText:"",
        accText:"",
        busVal:"",
        fundVal:"",
        tab:"",
        indAction:0,
        tabArr:[{repaymentText:"等额本息"},{repaymentText:"等额本金"}],
        arrayObj:[]
      }
    },
    onLoad(option){
      const that = this;
      console.log('option',option);
      that.repaymentText=option.repaymentText=="等额本息"?that.indAction==0:that.indAction==1;
     that.monVal=option.monVal;
      that.payInterest=option.payInterest;
      that.repayment=option.repayment;
      that.yearText=option.yearText;
      that.arrayObj=JSON.parse(option.arrayObj);
      that.rateText=option.rateText;
      that.accText=option.accText;
      that.busVal=option.busVal;
      that.fundVal=option.fundVal;
      that.tab=option.tab;
      console.log('option.arrayObj',JSON.parse(option.arrayObj));
    },
    onShow(){
      const that = this;
 
    },
    methods: {
//点击等额本金切换
// principalClick:function(){
  // const that = this;
//   that.repaymentText="等额本金";
  // that.arrayObj=[];
  //    that.repaymentText="等额本金";
    // if(that.tab==1){
    // var money1 = parseFloat(that.monVal) * 10000;
   
    // var month1 = parseInt(that.yearText);
   
    // that.PrintType2(money1, 0, month1, parseFloat(that.rateText), 0);
    //   console.log('等额本金',money1);
    //   console.log('等额本金年限',month1);
    //   console.log('等额本金利率',that.rateText);
  // }else if(that.tab==2){
  //   var month1 = parseInt(that.yearText);
  //   var money1 = that.busVal == "" ? 0 : parseFloat(that.busVal) * 10000;
  //   var money2 = that.fundVal == "" ? 0 : parseFloat(that.fundVal) * 10000;
  //    I.PrintType2(money1, money2, month1, that.rateText, that.accText);
  // }else if(that.tab==3){
  //  var money1 = that.monVal == "" ? 0 : parseFloat(that.monVal) * 10000;
  //   var month1 = parseInt(that.yearText);
  //   that.PrintType2(money1, 0, month1, that.accText, 0);
  // }
  
  
   
// },
//点击等额本息切换
interestClick:function(index,e){
  console.log('index',index);
   const that = this;
    that.arrayObj=[];
   that.indAction=index;
   
   if(index==0){
     
    if(that.tab==1){
      var apr1 = that.rateText == "4.900%" ? (4.9 / 100) : parseFloat(that.rateText) / 100;
      console.log('商业贷款',that.tab);
    var money1 = that.monVal == "" ? 0 : parseFloat(that.monVal) * 10000;
    var month1 = parseInt(that.yearText);
    that.PrintType1(money1, 0, month1, apr1, 0);
  }else if(that.tab==2){
    var apr1 = that.rateText == "4.900%" ? (4.9 / 100) : parseFloat(that.rateText) / 100;
    var apr2 = that.accText == "3.250%" ? (3.25 / 100) : parseFloat(that.accText) / 100;
    var month1 = parseInt(that.yearText);
    var money1 = that.busVal == "" ? 0 : parseFloat(that.busVal) * 10000;
    var money2 = that.fundVal == "" ? 0 : parseFloat(that.fundVal) * 10000;
     I.PrintType1(money1, money2, month1, apr1, apr2);
  }else if(that.tab==3){
    var apr2 = that.accText == "3.250%" ? (3.25 / 100) : parseFloat(that.accText) / 100;
   var money1 = that.monVal == "" ? 0 : parseFloat(that.monVal) * 10000;
    var month1 = parseInt(that.yearText);
    that.PrintType1(money1, 0, month1, apr2, 0);
  }
  }
  else{
    
    that.repaymentText="等额本金";
    if(that.tab==1){
    var apr1 = that.rateText == "4.900%" ? (4.9 / 100) : parseFloat(that.rateText) / 100;
    var money1 = that.monVal == "" ? 0 : parseFloat(that.monVal) * 10000;
    var month1 = parseInt(that.yearText);
    that.PrintType2(money1, 0, month1, apr1, 0);
    console.log('等额本金',that.rateText);
     console.log('等额本金1',money1);
     console.log('等额本金2',month1);
  }else if(that.tab==2){
    var apr1 = that.rateText == "4.900%" ? (4.9 / 100) : parseFloat(that.rateText) / 100;
    var apr2 = that.accText == "3.250%" ? (3.25 / 100) : parseFloat(that.accText) / 100;
    var month1 = parseInt(that.yearText);
    var money1 = that.busVal == "" ? 0 : parseFloat(that.busVal) * 10000;
    var money2 = that.fundVal == "" ? 0 : parseFloat(that.fundVal) * 10000;
     I.PrintType2(money1, money2, month1, apr1, apr2);
  }else if(that.tab==3){
    var apr2 = that.accText == "3.250%" ? (3.25 / 100) : parseFloat(that.accText) / 100;
   var money1 = that.monVal == "" ? 0 : parseFloat(that.monVal) * 10000;
    var month1 = parseInt(that.yearText);
    that.PrintType2(money1, 0, month1, apr2, 0);
  }
  }
},
PrintType1(money1, money2, month1, apr1, apr2) { //等额本息
const that = this;
    var I = this;
    
    var mapr1 = apr1 / 12; //商业月利率
    var mapr2 = apr2 / 12; //公积金月利率
    var fm1 = 1;
    for (var i = 1; i < month1; i++) {
        fm1 += Math.pow(1 + mapr1, i);
    }
    var fm2 = 1;
    for (var i = 1; i < month1; i++) {
        fm2 += Math.pow(1 + mapr2, i);
    }
    var perMonth1 = parseFloat((money1 * Math.pow(1 + mapr1, month1) / fm1).toFixed(2)); //商业每月还款额,保留两位小数
    console.log('每月还款',perMonth1.toFixed(0));
    var perMonth2 = parseFloat((money2 * Math.pow(1 + mapr2, month1) / fm2).toFixed(2)); //公积金每月还款额,保留两位小数

    var leftMoney1 = money1;
    var leftMoney2 = money2;
    var tempMoney1 = money1;
    var tempMoney2 = money2;
    var month = month1;
    var totalLX1 = 0;
    var totalLXT = 0;
    for (var i = 1; i <= month; i++) {
        var lx1 = (tempMoney1 * mapr1).toFixed(2);
        tempMoney1 = (tempMoney1 * (1 + mapr1) - perMonth1).toFixed(2);

        var lx2 = (tempMoney2 * mapr2).toFixed(2);
        tempMoney2 = (tempMoney2 * (1 + mapr2) - perMonth2).toFixed(2);

        if (i <= month1) {
            totalLXT += parseFloat(lx1 + lx2);
        }

    }
    var totalAmount = money1 + money2 + totalLXT;
    for (var i = 1; i <= month; i++) {
        var lx1 = parseFloat((leftMoney1 * mapr1).toFixed(2));
        leftMoney1 = (leftMoney1 * (1 + mapr1) - perMonth1).toFixed(2);

        var lx2 = parseFloat((leftMoney2 * mapr2).toFixed(2));
        leftMoney2 = (leftMoney2 * (1 + mapr2) - perMonth2).toFixed(2);
        if (i <= month1) {
            totalLX1 += parseFloat(lx1 + lx2);
        }
        totalAmount -= (perMonth1 + perMonth2);
           var detail = 
           {
             index:i,
             supply:parseFloat((perMonth1 + perMonth2).toFixed(2)),
             principal:parseFloat((perMonth1 - lx1).toFixed(2) + (perMonth2 - lx2).toFixed(2)),
             interest:parseFloat(lx1.toFixed(2) + lx2.toFixed(2)),
             surplus:parseFloat(totalAmount.toFixed(2))
           }
          //  (i, perMonth1.toFixed(0) + perMonth2.toFixed(0), (perMonth1 - lx1).toFixed(0) + (perMonth2 - lx2).toFixed(0), lx1.toFixed(0) + lx2.toFixed(0), (totalAmount).toFixed(0));
        I.arrayObj.push(detail); 
        
    }
    
    that.moneyText="每月还款额固定";
    that.textTitle="每月月供";
    that.monVal=(money1 + money2) / 10000;
    that.payInterest=(totalLX1.toFixed(2) / 10000).toFixed(2);
    console.log('详情',totalLX1);   
    that.repayment=((money1 + money2 + totalLX1).toFixed(2) / 10000).toFixed(2);
    that.Monthly=parseFloat(perMonth1 + perMonth2).toFixed(2);
},
//等额本金
      PrintType2(money1, money2, month1, apr1, apr2) { 
    const that = this;
    var mapr1 = apr1 / 12; //商业月利率
    var mapr2 = apr2 / 12; //公积金月利率
    //每月还本金
    var bj1 = money1 / month1;
    var bj2 = money2 / month1;

    var leftMoney1 = money1;
    var leftMoney2 = money2;
    var tempMoney1 = money1;
    var tempMoney2 = money2;

    var month = month1;
    var totalLX1 = 0;
    var totalLXT = 0;
    var firstPerMoney = 0;

    for (var i = 1; i <= month; i++) {
        var lx1 = parseFloat((tempMoney1 * mapr1).toFixed(2));
        var perMoney1 = parseFloat((parseFloat(bj1) + parseFloat(lx1)).toFixed(2)); //本期还款
        tempMoney1 = (tempMoney1 * (1 + mapr1) - perMoney1).toFixed(2);

        var lx2 = parseFloat((tempMoney2 * mapr2).toFixed(2));
        var perMoney2 = parseFloat((parseFloat(bj2) + parseFloat(lx2)).toFixed(2)); //本期还款
        tempMoney2 = (tempMoney2 * (1 + mapr2) - perMoney2).toFixed(2);

        if (i <= month1) {
            totalLXT += parseFloat(lx1 + lx2);
        }
    }
    var totalAmount = money1 + money2 + totalLXT;
    for (var i = 1; i <= month; i++) {
        var lx1 = parseFloat((leftMoney1 * mapr1).toFixed(2));
        var perMoney1 = parseFloat((parseFloat(bj1) + parseFloat(lx1)).toFixed(2)); //本期还款
        leftMoney1 = (leftMoney1 * (1 + mapr1) - perMoney1).toFixed(2);

        var lx2 = parseFloat((leftMoney2 * mapr2).toFixed(2));
        var perMoney2 = parseFloat((parseFloat(bj2) + parseFloat(lx2)).toFixed(2)); //本期还款
        leftMoney2 = (leftMoney2 * (1 + mapr2) - perMoney2).toFixed(2);

        if (i == 1) {
            firstPerMoney = perMoney1 + perMoney2;
        }
        if (i <= month1) {
            totalLX1 += parseFloat(lx1 + lx2);
        }

        totalAmount -= (perMoney1 + perMoney2);
        var detail = 
           {
             index:i,
             supply:parseFloat((perMoney1 + perMoney2).toFixed(2)),
             principal:parseFloat((perMoney1 - lx1).toFixed(2) + (perMoney2 - lx2).toFixed(2)),
             interest:parseFloat(lx1.toFixed(2) + lx2.toFixed(2)),
             surplus:parseFloat(totalAmount.toFixed(2))
           }
        that.arrayObj.push(detail);
        // that.arrayObj=JSON.stringify(that.arrayObj);
        // console.log('that.arrayObj',that.arrayObj);
    }
    that.moneyText="每月递减" + lx1 + "元";
    that.textTitle="首月月供";
    that.monVal=(money1 + money2) / 10000;
    that.payInterest=(totalLX1.toFixed(0) / 10000).toFixed(2);
    console.log('3333',totalLX1)
    that.repayment=((money1 + money2 + totalLX1).toFixed(2) / 10000).toFixed(2);
    that.Monthly=firstPerMoney;
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
.hsxian{ width: 100%; height:20rpx; background: #f8f8fa;}
.indexstyle{width: 100%; margin: 0 auto; background: #fff;}
.tabTop{height: 100rpx;line-height: 100rpx;display: flex;justify-content: center;border-bottom: 4rpx solid #F7F7F7;}
.tabTop>div{text-align: center;width: 50%;}
.line{width: 140rpx;height: 4rpx;background: #3072f6;margin: 0 auto;}
.listCenter{width: 100%;;display: flex;justify-content: center;padding: 30rpx 0;box-sizing: border-box;}
.listCenter>div{width: 25%;text-align: center;}
/* .listCenter_top{font-size: 26rpx;} */
.listCenter_price{color: #da0011;padding-top: 10rpx;}
.adviser {
  width: 96%;
  margin: 0 auto;
  box-sizing: border-box;
  white-space: nowrap;
}
.adviser_header {
  width: 100%;display:flex;justify-content: center;background: #F8F8F8;
}
.adviser_header > span {
  font-size: 28rpx;
  width: 25%;
  height: 70rpx;
  line-height: 70rpx;
  text-align: center;font-weight: bold;
}
/* .adviser_header > span:nth-child(1) { */
  /* float: left; */
  /* width: 70rpx !important; */
  /* height: 45rpx; */
/* } */
.adviser_img > img {
  width: 37rpx !important;
  height: 37rpx !important;
  margin-top: 18rpx;
}
.adviser_header > span checkbox .wx-checkbox-input {
  width: 25rpx;
  height: 25rpx;
}
.adviser_bot {
  width: 100%;
  height: 80rpx;
  line-height: 80rpx;
  display: flex;
  justify-content: center;
}
.adviser_bot > span {
  color: #333;
  font-size: 26rpx;
  width: 25%;
  text-align: center;
  float: left;
}
.colors{color: #3072f6;}
/* .adviser_bot > span:nth-child(1) {
  float: left;
  width: 70rpx !important;
  height: 45rpx;
} */
.adviser_img > img {
  width: 40rpx;
  height: 40rpx;
}
.adviser_bot > span checkbox .wx-checkbox-input {
  width: 25rpx;
  height: 25rpx;
}
.adviser_bot:nth-child(even) {
  background-color: #fff;
}
.adviser_bot:nth-child(odd) {
  background-color: #F8F8F8;
}
.my_kuang{ width: 96%; background: #3072f6; border-radius: 5%;margin: 40rpx auto;}
.s_yingh h1{ font-size: 30rpx; text-align: center; margin-bottom: 2%; color: #fff; padding-top:8%;}
.s_yingh .jine{text-align: center;}
.s_yingh .jine .qian{ font-size:80rpx; font-weight: bold; color: #fff;}
.s_yingh .jine .dw_r image{ width: 30rpx; height: 30rpx; margin-top:50%; display: block;}
.s_yingh .jine .dw_r p{ font-size: 30rpx; color: #fff;}
.s_yingh h2{font-size: 30rpx; text-align: center; color: #fff; padding-top:1%;}
.daikuan{ width: 100%; display: flex; flex-direction: row; color: #fff;}
.daikuan div{ width: 33.3%; margin-top:10%; margin-bottom:8%; text-align: center; border-right:2rpx #6d9bf8 solid;}
.daikuan div h2{ color: #acc6fb; margin-bottom:8%; font-size: 28rpx;}
</style>
