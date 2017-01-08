var date =0;

var player = {
    firstName:"John",
	seeds:0,
	nutrition:0,
	gift:0,
	cash:100,
	maxPlants:10
	};
	
var growingLot =[];
	
var update = function(){
	var output="";
	date++;
	output+="day: "+date;
	
	output+="<br> cash: "+player.cash+"<br> seeds: "+player.seeds;
	
	for (var i = 0; i < growingLot.length; i++) {
		growingLot[i].updateCactus();
		

	}
	document.getElementById("demo").innerHTML = output;
}

document.addEventListener('DOMContentLoaded', update(), false);	
window.setInterval(function(){
update()}, 1000);

var buySeeds = function(){
	if(player.cash>=20){
		player.cash=player.cash-20;
		player.seeds=player.seeds+25;
	}else{
		window.alert("DU HAR INGA PENGAR");
	}
	update();
}


var plantSeeds = function(){
	if(player.seeds>0 && growingLot.length<player.maxPlants){
		player.seeds=player.seeds-1;
		var div = document.createElement('div');
		div.id=growingLot.length;
		document.body.appendChild(div);

		growingLot.push(new Cactus("art","fisken",0,growingLot.length));
		
		
		
	}else{
		window.alert("du kan inte så");
	}
	update();
}


function Cactus(species, name, age,id) {
  this.species = species;
  this.name = name;
  this.age = age;
  this.id=id;
  
  this.updateCactus = function () {
		var div=document.getElementById(this.id);
		
		
	  
        this.age++;
		if(this.age<50){
			  div.innerHTML=".";
		  }else if(this.age<100){
			  div.innerHTML=",";
		  }else if(this.age<200){
			  div.innerHTML="o";
		  }else if(this.age<300){
			  div.innerHTML="0";
		  }
    };
  
}