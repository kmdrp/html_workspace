var Maze=function(stage,width,height,x,y){
	this.stage=stage;
	this.div;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.flag=true;
	/*this.nx=0;
	this.ny=0;*/
	

	this.init=function(){
	
		this.div=document.createElement("div");
		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.border="1px solid black";
		//this.div.float="left";
		var me=this;
		this.stage.appendChild(this.div);
		
		//나인 사각형을 클릭하면 this.div의 color change
		this.div.addEventListener("click",function(){
			if(this.flag=!this.flag){
				me.div.style.background="yellow";
				
			}else{
				me.div.style.background=me.stage.style.background;
				
			}

		/*
		this.change=function(){
			if(this.flag){
				this.div.style.background="black";
				this.flag=false;
			}else{
				this.div.style.background=this.stage.style.background;
				this.flag=true;
			}
		}	
		*/

		});
		
	}
	

	/*
	this.make=function(){
		this.nx=parseInt(this.stage.style.width)/parseInt(this.width);
		this.ny=parseInt(this.stage.style.height)/parseInt(this.height);

		for(var i=0;i<this.ny;i++){
			for(var a=0;i<this.ny;a++){
				
			}
		}
		
	}
*/
}
