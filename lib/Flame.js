//불꽃을 정의한다(객체정의)
var Flame=function(a,w,h,posX,posY){
	/*
		현실의 모든 사물은 객체지향언어에서 클래스로 표현되고.
		해당사물이 보유한 상태는 변수이 속성으로 표현하며
		해당 사물이 보유한 동작은 함수인 메서드로 표현한다.
		객체지향 언어는 현실에 존재하느 ㄴ사물 및 개념까지도 표현할수있다.
		눈에보이는 것 들 뿐만아니라 추상적개념까지고 가능하다.
		
		하지만 변수와 함수가 객체의 소유가 될때는 명칭이 바뀐다

		변수:객체가 보유한 상태를 표현한다고해서 속성(property)
		함수:객체가 보유한 동작방식을포현한다고해서 메서드(method)
	*/
	
	/*----------------------
		가로 세로 크기 위치
		a:어떤 div에 붙을지
		w:가로크기
		h:높이
		posX:초기 x좌표위치
		posY:초기 y좌표위치
	--------------------------*/
	this.width=w;
	this.height=h;
	this.x=posX-30;//left
	this.y=posY+15;//top
	this.img;
	this.arr=new Array();
	this.area=a;
	this.cnt=0;//index for images 
	//init태어날때(=메모리에올라올때) 하고싶은초기작업
	//사용될 메서드정의
	this.init=function(){
		this.img=document.createElement("img");
		this.arr[0]="../images/flame/flame1.png";
		this.arr[1]="../images/flame/flame2.png";
		this.arr[2]="../images/flame/flame3.png";
		this.arr[3]="../images/flame/flame4.png";
		//호출자가 결정하는 영역에 붙일거임!!
		this.img.src=this.arr[this.cnt];
		//images width height
		this.img.style.position="absolute";
		this.img.style.left=this.x-30+"px";
		this.img.style.top=this.y+15+"px";
		
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		
		this.area.appendChild(this.img);
	
		this.move();
	}
	//동작방식 표현

	this.go=function(){
		
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";
	}


	this.move=function(){
		var me=this;
		//이미지를 계속 교체해서 보여줄거
		//src값을 변경
	
		this.cnt++;
		if(this.cnt>=this.arr.length){
			this.cnt=0;		
		}
		this.img.src=this.arr[this.cnt];
		setTimeout(function(){
			me.move();
		},100);

	}
}