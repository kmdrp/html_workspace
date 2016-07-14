
/*
s:어떤 div에 붙을지!
posY: position Y of bullet start
*/

var Bullet= function(s,x,y){
	//property(속성)
	this.stage=s;
	this.img;
	this.x=x;
	this.y=y;
	this.st;
	this.velX=10;//몇픽셀씩 움직일지 결정
	//객체안에 들어있는 함수는 method라 한다
	//method(방법):객체의 동작 방식을 결정!
	this.init=function(){
		this.img=document.createElement("img");
		this.img.src="../images/aven/bim.png";
		//this.span.innerText="◆";
		this.img.style.position="absolute";
		//this.span.style.color="red";
		this.img.style.left=this.x+"px";
		
		this.img.style.top=this.y+"px";

		this.img.style.width=80+"px";
		this.img.style.height=20+"px";
		
		this.s=document.getElementById("stage");
		this.s.appendChild(this.img);
		this.move();
		this.hitTest();
	}
	this.hitTest=function(){
		for(var i=0;i<enemyArray.length;i++){
			
			if(enemyArray[i]!=undefined){	//배열에 존재하는 img에 대해서만 죽여 not undefined 가 아닌경우만
			//적군과 부딪히면?
				var result=hitTest(this.img,enemyArray[i].img);	
				if(result){
					//총알먼저 죽이고
					this.stage.removeChild(this.img);
					clearTimeout(this.st);
					//적군 죽이고
					this.stage.removeChild(enemyArray[i].img);
					clearTimeout(enemyArray[i].st);
					delete enemyArray[i];//배열에서 제거 ::undefined
																
					return;
				}
			}
		}
	}

	this.move=function(){
		var me=this;
		this.x+=this.velX;
		this.img.style.left=this.x+"px";
		//stage를 벗어나면 총알의 setTimeout은 멈춰야한다
		
		this.st=setTimeout(function(){
			me.move();
		},10);
	
		
			//안맞고 나가면??
			
	
		if(parseInt(this.img.style.left)>parseInt(this.stage.style.width)){

			clearTimeout(this.st);
			this.stage.removeChild(this.img);
			return;
		}
	}
}
