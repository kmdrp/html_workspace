/*
 점점 다가오는 적 
*/
var Unit=function(stage,width,height,x,y,src ){
	this.stage=stage;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.img;
	this.src=src;
	this.velX=-3;//\+++x++x+xx+x++x
	this.velY=0;//++y+y+y+y+y+y+y+y+
	this.st;

	this.init=function(){
		this.img=document.createElement("img");
		this.img.src=this.src;
		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.stage.appendChild(this.img);
		
		this.move();
	
	}
	this.move=function(){
		var me=this;
		this.x+=this.velX;
		this.y+=this.velY;

		//움직임 설정
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";
		this.st=setTimeout(function(){
			me.move();
		},400);
	
	}
}