var app = new Vue({
    el: "#app",
    data: {
        canvasX: 0, /*������������������ƶ�ʱ��õ�����*/
        canvasY: 0,
        canMove: false,
        lColor: "#666",/*���ʵ���ɫѡ��*/
        lWidth: 2,
        canvasw: 600,
        canvash: 400,
        context:null,
        src:0,
        imgUrl:[]
    },
    methods: {
        isdown: function (e) {
            var t= e.target;
            this.canMove = true;
            this.canvasX =e.offsetX; // e.clientX-t.parentNode.offsetLeft;
            this.canvasY =e.offsetY; //e.clientY-t.parentNode.offsetTop;
        },
        isup: function (e) {
            this.canMove = false;
        }
        ,
        momo: function (e) {/*������ڻ������ƶ�ʱ���������*/
            var t= e.target;
            if (this.canMove) {/*������������ʱ���ܻ�����겢��������*/
                var x = e.offsetX;//e.clientX-t.parentNode.parentNode.offsetLeft;
                var y = e.offsetY;//e.clientY-t.parentNode.parentNode.offsetTop;
               /* console.log(e.offsetX);
                console.log(e.offsetY);*/

                var cs = $("#canvas");
                 this.context = cs[0].getContext('2d');
                //context.clearRect(0, 0, this.canvasw, this.canvash);
                this.context.beginPath();
                
                this.context.moveTo(this.canvasX, this.canvasY);
                //for(var i=1;i<this.canvasX.lenght;i++){
                //    context.lineTo(this.canvasX[i],this.canvasY[i]);
                //};
                this.context.lineTo(x, y)
                this.context.strokeStyle = this.lColor;
                this.context.lineWidth = this.lWidth;
                this.context.stroke();
                this.canvasX = x;
                this.canvasY = y;
            }

        },
        ckc:function(e){

            this.lColor= e.target.style.background;
            $("ul li").removeClass("active");
            $(e.target).addClass("active");

        },
        save:function(e){
            // ����ͼƬ
                var  canvas = document.querySelector('#canvas');
                var src = canvas.toDataURL('image/png');
                this.imgUrl.push(src);
            console.log(this.imgUrl);

        },
        removeImg:function(e){
            console.log(e.target.parentNode.firstChild.src);
            var img=this.imgUrl;
            for(var i=0;i<img.length;i++){
                if(img[i]===e.target.parentNode.firstChild.src){
                    img.splice(i,1);
                    return;
                }
            }
            
            
        }
    }
});





