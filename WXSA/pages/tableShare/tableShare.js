// pages/link/link.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: "",
    name: ""
  },
  accountInput(e) {
    this.setData({
      account: e.detail.value
    })
  },
  nameInput(e) {
    this.setData({
      name: e.detail.value
    })
  },
  req() {
    var that = this;
    if (this.data.account === "" | this.data.name === "") {
      app.toast("请输入完整信息");
    }
    app.ajax({
      url: app.globalData.url + "funct/share/startreq",
      method: 'POST',
      data: {
        account: this.data.account,
        user: this.data.name
      },
      fun: res => {
        app.toast(res.data.message);
        that.onLoad();
      }
    })
  },
  cancelreq(){
    var that = this;
    app.ajax({
      url: app.globalData.url + "funct/share/cancelreq",
      fun: res => {
        app.toast(res.data.message);
        that.onLoad();
      }
    })
  },
  agree(e) {
    var that = this;
    app.ajax({
      url: app.globalData.url + "funct/share/agreereq",
      data: {
        id: e.currentTarget.dataset.id
      },
      fun: res => {
        app.toast(res.data.message);
        that.onLoad();
      }
    })
  },
  lifting(e){
    var that = this;
    app.ajax({
      url: app.globalData.url + "funct/share/lifting",
      data: {
        id: e.currentTarget.dataset.id
      },
      fun: res => {
        app.toast("成功");
        that.onLoad();
      }
    })
  },
  refuse(e) {
    var that = this;
    app.ajax({
      url: app.globalData.url + "funct/share/refusereq",
      data: {
        id: e.currentTarget.dataset.id
      },
      fun: res => {
        app.toast(res.data.message);
        that.onLoad();
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    app.ajax({
      url: app.globalData.url + "funct/share/tableshare",
      fun: res => {
        that.setData({
          data: res.data.info
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})