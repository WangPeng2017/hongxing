import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)



let Routers = [{
  path: '/',
  name: 'main',
  component: resolve => require(['Views/Main'], resolve)
}];

const publishGoods = [{
  path: '/main/publishgoods',
  name: 'publishGoods',
  component: resolve => require(['Views/publishGoods/publishGoods'], resolve)
}, {
  path: '/main/publishgoods/chooseClassify1',
  name: 'chooseClassify1',
  component: resolve => require(['Views/publishGoods/chooseClassify1'], resolve)
}, {
  path: '/main/publishgoods/chooseClassify1/chooseClassify2',
  name: 'chooseClassify2',
  component: resolve => require(['Views/publishGoods/chooseClassify2'], resolve)
}, {
  path: '/main/publishgoods/chooseClassify1/chooseClassify2/chooseClassify3',
  name: 'chooseClassify3',
  component: resolve => require(['Views/publishGoods/chooseClassify3'], resolve)
}, {
  path: '/main/publishgoods/chooseClassify1/chooseClassify2/chooseClassify3/addGoods',
  name: 'addGoods',
  component: resolve => require(['Views/publishGoods/addGoods'], resolve)
}, {
  path: '/main/publishgoods/chooseClassify1/chooseClassify2/chooseClassify3/addGoods/goodsDetail',
  name: 'goodsDetail',
  component: resolve => require(['Views/publishGoods/goodsDetail'], resolve)
}]

const inform = [{
  path: '/main/inform',
  name: 'inform',
  component: resolve => require(['Views/inform/inform'], resolve)
}, {
  path: '/main/inform/detail',
  name: 'informDetail',
  component: resolve => require(['Views/inform/informDetail'], resolve)
}]

const order = [{
  path: '/main/order',
  name: 'order',
  component: resolve => require(['Views/order/order'], resolve)
}, {
  path: '/main/order/detail1',
  name: 'orderDetail1',
  component: resolve => require(['Views/order/orderDetail1'], resolve)
}, {
  path: '/main/order/detail2',
  name: 'orderDetail2',
  component: resolve => require(['Views/order/orderDetail2'], resolve)
}]

const rebate = [{
    path: '/main/rebate',
    name: 'rebate',
    component: resolve => require(['Views/rebate/rebate'], resolve)
  },
  {
    path: '/main/rebate/flList',
    name: 'flList',
    component: resolve => require(['Views/rebate/flList'], resolve)
  }, {
    path: '/main/rebate/flList/flDetail',
    name: 'flDetail',
    component: resolve => require(['Views/rebate/flDetail'], resolve)
  }, {
    path: '/main/rebate/getMoney',
    name: 'getMoney',
    component: resolve => require(['Views/rebate/getMoney'], resolve)
  }, {
    path: '/main/rebate/getMoney/txList',
    name: 'txList',
    component: resolve => require(['Views/rebate/txList'], resolve)
  }, {
    path: '/main/rebate/getMoney/addWXAccount',
    name: 'addWXAccount',
    component: resolve => require(['Views/rebate/addWXAccount'], resolve)
  }, {
    path: '/main/rebate/getMoney/addBankAccount',
    name: 'addBankAccount',
    component: resolve => require(['Views/rebate/addBankAccount'], resolve)
  }, {
    path: '/main/rebate/getMoney/getMoneySuccess',
    name: 'getMoneySuccess',
    component: resolve => require(['Views/rebate/getMoneySuccess'], resolve)
  }
]

const erweima = [{
  path: '/main/erweima',
  name: 'erweima',
  component: resolve => require(['Views/erweima/erweima'], resolve)
}];

const publishJob = [{
  path: '/main/publishJob',
  name: 'publishJob',
  component: resolve => require(['Views/publishJob/publishJob'], resolve)
}, {
  path: '/main/publishJob/addJobCondition',
  name: 'addJobCondition',
  component: resolve => require(['Views/publishJob/addJobCondition'], resolve)
}, {
  path: '/main/publishJob/addJobCondition/addJobMsg',
  name: 'addJobMsg',
  component: resolve => require(['Views/publishJob/addJobMsg'], resolve)
}, {
  path: '/main/publishJob/addJobCondition/addJobMsg/jobDetail',
  name: 'jobDetail',
  component: resolve => require(['Views/publishJob/jobDetail'], resolve)
}];

const combo = [{
  path: '/main/combo',
  name: 'combo',
  component: resolve => require(['Views/combo/combo'], resolve)
}, {
  path: '/main/combo/comboSJ',
  name: 'comboSJ',
  component: resolve => require(['Views/combo/comboSJ'], resolve)
}, {
  path: '/main/combo/comboSJ/addSJCard',
  name: 'addSJCard',
  component: resolve => require(['Views/combo/addSJCard'], resolve)
}, {
  path: '/main/combo/comboSJ/addSJCard/addGoodsFWCard',
  name: 'addGoodsFWCard',
  component: resolve => require(['Views/combo/addGoodsFWCard'], resolve)
}, {
  path: '/main/combo/comboSJ/addSJCard/addGoodsFWCard/sureSJCardDetail',
  name: 'sureSJCardDetail',
  component: resolve => require(['Views/combo/sureSJCardDetail'], resolve)
}, {
  path: '/main/combo/publishFWCard',
  name: 'publishFWCard',
  component: resolve => require(['Views/combo/publishFWCard'], resolve)
}, {
  path: '/main/combo/publishFWCard/ffList',
  name: 'ffList',
  component: resolve => require(['Views/combo/ffList'], resolve)
}, {
  path: '/main/combo/publishFWCard/hyList',
  name: 'hyList',
  component: resolve => require(['Views/combo/hyList'], resolve)
}, {
  path: '/main/combo/publishFWCard/ffList/comboDetail',
  name: 'comboDetail',
  component: resolve => require(['Views/combo/comboDetail'], resolve)
}, {
  path: '/main/combo/publishFWCard/publishFWDetail',
  name: 'publishFWDetail',
  component: resolve => require(['Views/combo/publishFWDetail'], resolve)
}, {
  path: '/main/combo/comboSJ/addSJCard/addGoodsGWCard',
  name: 'addGoodsGWCard',
  component: resolve => require(['Views/combo/addGoodsGWCard'], resolve)
}, {
  path: '/main/combo/publishGWCard',
  name: 'publishGWCard',
  component: resolve => require(['Views/combo/publishGWCard'], resolve)
}];

const comboLY = [{
  path: '/main/combo/comboLY',
  name: 'comboLY',
  component: resolve => require(['Views/combo/comboLY'], resolve)
}, {
  path: '/main/combo/comboLY/joinGWCard',
  name: 'joinGWCard',
  component: resolve => require(['Views/combo/joinGWCard'], resolve)
}, {
  path: '/main/combo/comboLY/joinFWCard',
  name: 'joinFWCard',
  component: resolve => require(['Views/combo/joinFWCard'], resolve)
}, {
  path: '/main/combo/comboLY/joinFWCard/addGoodsLYGWCard',
  name: 'addGoodsLYGWCard',
  component: resolve => require(['Views/combo/addGoodsLYGWCard'], resolve)
}, {
  path: '/main/combo/comboLY/joinFWCard/addGoodsLYGWCard/sureLYCardDetail',
  name: 'sureLYCardDetail',
  component: resolve => require(['Views/combo/sureLYCardDetail'], resolve)
}, ]

const finance = [{
  path: '/main/finance',
  name: 'finance',
  component: resolve => require(['Views/finance/finance'], resolve)
}, {
  path: '/main/finance/zdDetail',
  name: 'zdDetail',
  component: resolve => require(['Views/finance/zdDetail'], resolve)
}, {
  path: '/main/finance/jsDetail',
  name: 'jsDetail',
  component: resolve => require(['Views/finance/jsDetail'], resolve)
}]


const shop = [{
  path: '/main/shop',
  name: 'shop',
  component: resolve => require(['Views/shop/shop'], resolve)
}, {
  path: '/main/shop/updMSG',
  name: 'updMSG',
  component: resolve => require(['Views/shop/updMSG'], resolve)
}, {
  path: '/main/shop/upLevel',
  name: 'upLevel',
  component: resolve => require(['Views/shop/upLevel'], resolve)
}, {
  path: '/main/shop/upLevel/sure',
  name: 'sure',
  component: resolve => require(['Views/shop/sure'], resolve)
},{
  path: '/main/shop/upLevel/sure/paySuccess',
  name: 'paySuccess',
  component: resolve => require(['Views/shop/paySuccess'], resolve)
}]

const offlinePay = [{
  path: '/main/offlinePay',
  name: 'offlinePay',
  component: resolve => require(['Views/offlinePay/offlinePay'], resolve)
}]


Routers = [
  ...Routers,
  ...publishGoods,
  ...inform,
  ...order,
  ...rebate,
  ...finance,
  ...erweima,
  ...publishJob,
  ...combo,
  ...comboLY,
  ...shop,
  ...offlinePay
]
export default new Router({
  routes: Routers
})
