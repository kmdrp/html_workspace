/*
   총알이 위로 날아가는 유형의 게임에 적절함	
*/
var Bullet2=function(stage,width,height,x,y){
	this.stage=stage;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.img;
	this.velY=4;
	this.st;
	this.init=function(){
		this.img=document.createElement("img");
		this.img.src="../gallerxy/bullet.png"
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";

		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";
		this.stage.appendChild(this.img);
		this.move();
	}
	this.move=function(){
		var me=this;
		this.y=this.y-this.velY;
		this.img.style.top=this.y+"px";
		//적군과의 충돌시 총알제거!
			//대왕파리가 총알맞앗나
		//	for(var i=0;i<kingarr.length)
		//console.log("대왕파리의 갯수는 "+kingarr.length);
			//쫄병파리가 총알맞앗나
		var index=0;
		
		for(var a=0; a<allarr.length;a++){
			for(var i=0;i<allarr[a].length;i++){
				var result=hitTest(this.img , allarr[a][i].img);	
				
				if(result){
					console.log(i+"번째 킹과 마주쳤어!!");

					//왕죽고 
					this.stage.removeChild(allarr[a][i].img);
					allarr[a][i].flag=false;

					//나죽고
					this.stage.removeChild(this.img);
					clearTimeout(this.st);
					break;
					return;
				}			
			}
		}
		//총알이 시야에서 사라지면 settimeout 종료	
		
		this.st=setTimeout(function(){
			me.move();
		}, 10);
	}
}
