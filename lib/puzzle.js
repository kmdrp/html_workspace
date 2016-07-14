/*
퍼즐 객체 정의
퍼즐에 클릭이벤트
*/

/*
window.addEventListener("click",function(){})
*/
var Puzzle=function(stage,width,height,color){
	this.stage=stage;
	this.div;
	this.width=width;
	this.height=height;
	this.color=color;
	
	
	this.init=function(){
		var me=this;
		this.div=document.createElement("div");
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.background=this.color;
		this.div.style.float="left";
		this.stage.appendChild(this.div);
		
		this.div.addEventListener("click", function(){

			me.div.style.background="";
	});
	
	}

}