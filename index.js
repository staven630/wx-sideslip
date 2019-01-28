Component({
  options: {
    multipleSlots: true
  },
  properties: {
    //  组件显示区域的宽度 (rpx)
    width: {
      type: Number,
      value: 750 // 750rpx 即整屏宽
    },
    //  组件显示区域的高度 (rpx),必填项
    height: {
      type: Number,
      value: 0
    },
    //  组件滑动显示区域的宽度 (rpx)
    slideWidth: {
      type: Number,
      value: 0
    },
    // 是否允许惯性越界
    out: {
      type: Boolean,
      value: true
    },
    // 初始是否侧滑
    show: {
      type: Boolean,
      value: false
    },
    distance: {
      type: Number,
      value: 10
    }
  },

  data: {
    x: 0
  },

  ready() {
    const info = wx.getSystemInfoSync()
    this._pixelRatio = info.pixelRatio
    const { slideWidth } = this.properties
    let params = {}
    if (!slideWidth) {
      const query = wx.createSelectorQuery().in(this)
      query
        .select('.slideslip-right')
        .boundingClientRect(res => {
          this._slideWidth = res.width
          this._threshold = this._slideWidth / 3
          params.slideWidth = this._slideWidth * this._pixelRatio
          this.setParams(params)
        })
        .exec()
    } else {
      this._slideWidth = this.properties.slideWidth / this._pixelRatio
      this._threshold = this._slideWidth / 3
      this.setParams(params)
    }
  },
  methods: {
    setParams(params) {
      const { show } = this.properties
      if (show) {
        params.x = -this._slideWidth
      }
      if (Object.keys(params).length > 0) {
        this.setData(params)
      }
    },
    onTouchStart(e) {
      this._startX = e.changedTouches[0].pageX
    },
    onTouchEnd(e) {
      this._endX = e.changedTouches[0].pageX
      const { _endX, _startX, _threshold } = this
      const { distance } = this.properties
      let x = this.data.x
      const _distance = _endX - _startX
      console.log(_distance)
      console.log(distance)
      if (_distance < 0) {
        if (-_distance < distance) return
        x = -_distance < _threshold ? 0 : -this._slideWidth
      } else {
        if (_distance < distance) return
        x = _distance > _threshold ? 0 : -this._slideWidth
      }

      this.setData({
        x
      })
    }
  }
})
