var	Rockman=function(stage,width,height,x,y,src){
	this.stage=stage;
	this.div;
	this.img;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.src=src;
	this.velX=0;
	this.velY=2;
	this.gravity=0.1;
	this.falling=true;//항상 떨어지고있는 중력 있는 변수
	this.jumping=true;
	this.actioncnt=0;
	this.speedcnt=0;
	this.running=false;//z키보드 누를때만 true 로 처리....


//////////////////////////////////////////////////////
	this.init=function(){
		this.div=document.createElement("div");
		this.img=document.createElement("img");
		
		this.img.src=this.src;
		
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";

		this.div.style.overflow="hidden";
		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
		
	//image <div<stage
		this.img.style.position="relative";
	//	this.img.style.top=-65+"px";
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.div.appendChild(this.img);
		this.stage.appendChild(this.div);
		this.move();
		
	}
	//이 메소드 호출자는 이미지의 경로를 인수로 넘기면 됨!!
    
	this.action=function(){
		if(this.running){//키보드 누를때만 코드수행
			this.speedcnt++;
			if(this.speedcnt%35==0){
				actioncnt++;//0.1.2.3
				if(actioncnt>actionArray.length-1){
					actioncnt=0;
				}
			}
			this.img.src=actionArray[actioncnt];
		}else{
			this.img.src="../images/rm/rock.png";
		}
	}
	this.move=function(){
		var me=this;		

		this.velY+=this.gravity;	
	
		if(this.velY>0){
			this.jumping=false;
			this.falling=true;
		}
		//블럭과 마주쳣는지 체크!!!!!
		//settimeout은 멈추지말고, 중력도 건들지말고 velY에집중
		//
		for(var i=0;i<blarr.length;i++){
			var result=hitTest(this.div , blarr[i].img );
			if(result&&this.falling){
			//	console.log("!");
				this.velY=0;
				this.falling=false;//벽돌을 밟으면 더이상 떨어지지 않음

				//this.y=-60+"px";?????이건뭔데 되냐?
			}
		}
		this.x+=this.velX;
		this.y+=this.velY;

		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
		this.action();
		//전역변수인 action cnt를 여기서 증가시키자!!
		//speedcnt 가일정시점에 도달하면 


	/*
		this.speedcnt++;
		if(this.speedcnt%1000){
			speedcnt=0;
			actioncnt++;
		}
		if(actioncnt>actionArray.length-1){
			actioncnt=0;
		}
	*/

		setTimeout(function(){
			me.move();
		},10);

	}
	
}