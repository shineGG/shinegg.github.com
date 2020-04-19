var app = new Vue({
    el: "#app",
    data() {
      return {
          testList: new Array(6),
          spaceMultiple: 1, //木板距离圆心垂直距离倍数，1倍时为多边形闭合状态，超过1倍则是木桶分拆状态
          increat: 0.5, // 木板分拆最终的距离圆心倍数增加倍数，此时木板距离圆心为闭合状态1.5倍
          timer: null, 
          time: 1000/100, //木板远离圆心每秒变化时间 此时为每秒100帧
          x: 0.01, //增长到increat+1 过程中每次定时器增长的长度
          isRoate: false, //ul是否旋转
          ulRotateDeg: 0, //ul旋转的角度，用于选中某个li时，让该li转为正面
          rotateSec: 2 //ul旋转所需时长
      }
    },
    computed: {
        getDeg() {
            return 360/this.testList.length;
        },
        getDefaultSpaceToO() {
            let halfDeg = this.getDeg/2;
            let radian = halfDeg*Math.PI/180;
            let tanValue = Math.tan(radian);
            
            return 50/tanValue;
        },
        spaceToO() {
            return this.getDefaultSpaceToO*this.spaceMultiple;
        },
        increatDeg() {
            return 0
        }
    },
    mounted() {
        this.init()
        setTimeout(() => {
            this.isRoate = true;
            this.ulRotateDeg = 360;
        }, 100)
    },
    methods: {
        getRotate(index) {
            return index
        },
        init() {
            setTimeout(() => {
                this.spaceMultipleAdd(this.x)
            }, this.time)
            /* var message;
            console.log('message', message === undefined)
            var obj = {
                k1: 'k1value'
            }
            console.log('obj.k1', obj.k1)
            console.log('obj.k2', obj.k2)
            console.log('obj===', Object.prototype.toString.call(obj.k2))
            console.log('obj===', Object.prototype.toString.call(null)) */
        },
        spaceMultipleAdd(x) {
            this.spaceMultiple+=x;
            // console.log("x", x)
            if(this.spaceMultiple < (this.increat+1)) {
                this.timer = setTimeout(() => {
                    this.spaceMultipleAdd(x)
                }, this.time)
            } else {
                clearTimeout(this.timer)
            }
        },
        rotateToCurrent(index, currentDeg) {
            this.ulRotateDeg = 360 - currentDeg;
            if(this.ulRotateDeg<90) {
                // console.log("900000")
                this.rotateSec = 1;
            } else if(this.ulRotateDeg < 180) {
                // console.log("1800000")
                this.rotateSec = 1;
            } else if(this.ulRotateDeg < 270) {
                // console.log("2700000")
                this.rotateSec = 1;
            } else {
                // console.log("300000")
                this.rotateSec = 1;
            }
        }
    }
});
