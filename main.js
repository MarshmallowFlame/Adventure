var date = 0;

var player = {
    firstName: "John",
    seeds: 0,
    nutrition: 0,
    gift: 0,
    cash: 100,
    maxPlants: 10
};

var growingLot = [];
var onStartUp = function() {
    for (i = 0; i < player.maxPlants; i++) {

        var div = document.createElement('div');
        div.id = i;

        var t = document.createTextNode("#"); // Create a text node
        div.appendChild(t); // Append the text to <div>

        btn = document.createElement("Button");
        btn.innerHTML = "plant " + i;
        btn.id = "p"+i;
        btn.onclick = function() {
			if (player.seeds>0){
				player.seeds--;
				console.log("id: " + this.id);
				growingLot[this.id.substring(1)].age = 1;
				this.parentNode.removeChild(this);
			}else{
				window.alert("du kan inte så");
			}
            
        };
        div.appendChild(btn);



        document.body.appendChild(div);

        growingLot.push(new Cactus("art", "fisken", 0, i));
        console.log(growingLot[i].id);
    }

}

var update = function() {
    var output = "";
    date++;
    output += "day: " + date;

    output += "<br> cash: " + player.cash + "<br> seeds: " + player.seeds;

    for (var i = 0; i < growingLot.length; i++) {
        growingLot[i].updateCactus();


    }
    document.getElementById("demo").innerHTML = output;
}

document.addEventListener('DOMContentLoaded', onStartUp(), false);
window.setInterval(function() {
    update()
}, 100);

var buySeeds = function() {
    if (player.cash >= 20) {
        player.cash = player.cash - 20;
        player.seeds = player.seeds + 25;
    } else {
        window.alert("DU HAR INGA PENGAR");
    }
    update();
}


var eatCactus = function(id) {
    growingLot[id].age=0;
    disco();


}

var disco = function() {
    window.alert("disco");
}

function Cactus(species, name, age, id) {
    this.species = species;
    this.name = name;
    this.age = age;
    this.id = id;
    this.div = document.getElementById(this.id);
    this.updateCactus = function() {
        var div = this.div;

		if (this.age==0) {
			div.childNodes[0].nodeValue = "#";
		} else if (this.age == 1) {
            div.childNodes[0].nodeValue = ".";
        } else if (this.age == 100) {
            div.childNodes[0].nodeValue = ",";
        } else if (this.age == 200) {
            div.childNodes[0].nodeValue = "o";
        } else if (this.age == 300) {
            div.childNodes[0].nodeValue = "0";

            btn = document.createElement("Button");
            btn.innerHTML = "eat " + this.id;
            btn.id = "e"+this.id;
            console.log(btn.id);
            btn.onclick = function() {
				var i=this.id.substring(1)
				div=document.getElementById(i);
				btn = document.createElement("Button");
				btn.innerHTML = "plant " + i;
				btn.id = "p"+i;
				btn.onclick = function() {
					console.log("id: " + this.id);
					growingLot[this.id.substring(1)].age = 1;
					this.parentNode.removeChild(this);
				};
				div.appendChild(btn);
				
				
                console.log("id: " + this.id.substring(1));
                eatCactus(this.id.substring(1));
				this.parentNode.removeChild(this);
            };
            div.appendChild(btn);
        }
        if (this.age > 0) {
            this.age++;

        }
    };

}