function Ui()
{
    ///logo
    this.startScreen=function(){
        console.log("programista płakał jak commitował");
        var ss = document.createElement("div");
        ss.style.position = "absolute";
        //ss.style.backgroundColor = "red";
        ss.style.backgroundImage = "url(gfx/stars.png)";
        ss.style.height = "100%";
        ss.style.width = "100%";
        ss.id = "startScreen";
        var img = document.createElement("IMG");
        img.src = "gfx/logo.png";
        var gif = document.createElement("IMG");
        gif.src = "gfx/load.gif";
        gif.style.width = "10%";
        img.style.height = "100%";
        img.style.display = "block";
        img.style.margin = "0 auto ";
        ss.appendChild(gif);
        gif.style.position = "absolute";
        gif.style.left = "45%";
        gif.style.top = "50%";
        ss.appendChild(img);
        ss.style.zIndex = "1";
        document.body.appendChild(ss);
    }

	this.writeColor = function(color) {
		var yourColor = document.createElement('div');
		yourColor.id = "yourColor";
		yourColor.innerHTML = "Twój kolor to: <br />";
		if(color == "red")
		    yourColor.innerHTML += "<span style='color:red'>czerwony</span>";
		else if(color == "blue")
		    yourColor.innerHTML += "<span style='color:#4366F0'>niebieki</span>";
		else if(color == "orange")
		    yourColor.innerHTML += "<span style='color:orange'>pomarańczowy</span>";
		else if(color == "purple")
		    yourColor.innerHTML += "<span style='color:#931AAB'>fioletowy</span>";
		yourColor.style.color = "white";
		yourColor.style.width  = 100 + "px";
		yourColor.style.height = 60 + "px";
		yourColor.style.textAlign = "center";
		yourColor.style.position = "absolute";
		yourColor.style.bottom = 10 + "px";
		yourColor.style.right = 103 + "px";
		document.body.appendChild(yourColor);
	}

	this.writeCurrentPlayer = function(color) {
		if(document.getElementById("currentPlayer") == null)
			var currentPlayer = document.createElement('div');
		else
			var currentPlayer = document.getElementById("currentPlayer");
		currentPlayer.id = "currentPlayer";
		currentPlayer.innerHTML = "Aktualnie gra: <br />";
		if(color == "red")
		    currentPlayer.innerHTML += "<span style='color:red'>czerwony</span>";
		else if(color == "blue")
		    currentPlayer.innerHTML += "<span style='color:#4366F0'>niebieki</span>";
		else if(color == "orange")
		    currentPlayer.innerHTML += "<span style='color:orange'>pomarańczowy</span>";
		else if(color == "purple")
		    currentPlayer.innerHTML += "<span style='color:#931AAB'>fioletowy</span>";
		currentPlayer.style.color = "white";
		currentPlayer.style.width  = 100 + "px";
		currentPlayer.style.height = 60 + "px";
		currentPlayer.style.textAlign = "center";
		currentPlayer.style.position = "absolute";
		currentPlayer.style.bottom = 10 + "px";
		currentPlayer.style.right = 213 + "px";
		document.body.appendChild(currentPlayer);
	}

	this.drawDice = function() {
		var canvas = document.createElement('canvas');
			canvas.id     = "my_canvas_id";
			canvas.width  = 83;
			canvas.height = 83;
			canvas.style.position = "absolute";
			canvas.style.bottom = 10 + "px";
			canvas.style.right = 10 + "px";
			//canvas.style.zIndex="100"
			document.body.appendChild(canvas);

			var myCanvas = document.getElementById('my_canvas_id');
			var ctx = myCanvas.getContext('2d');
			var img = new Image;

			img.onload = function(){
			  ctx.drawImage(img,0,0);
			};
			var wynik = Math.floor((Math.random() * 6) + 1);
			switch (wynik){
				case 1:
					img.src = 'gfx/1.jpg';
					break;
				case 2:
					img.src = 'gfx/2.jpg';
					break;
				case 3:
					img.src = 'gfx/3.jpg';
					break;
				case 4:
					img.src = 'gfx/4.jpg';
					break;
				case 5:
					img.src = 'gfx/5.jpg';
					break;
				case 6:
					img.src = 'gfx/6.jpg';
					break;
		}
	}

	this.setDice = function(wynik) {
		var myCanvas = document.getElementById('my_canvas_id');
			var ctx = myCanvas.getContext('2d');
			var img = new Image;

			img.onload = function(){
			  ctx.drawImage(img,0,0);
			};
			//var wynik = Math.floor((Math.random() * 6) + 1);
			switch (wynik){
				case 1:
					img.src = 'gfx/1.jpg';
					break;
				case 2:
					img.src = 'gfx/2.jpg';
					break;
				case 3:
					img.src = 'gfx/3.jpg';
					break;
				case 4:
					img.src = 'gfx/4.jpg';
					break;
				case 5:
					img.src = 'gfx/5.jpg';
					break;
				case 6:
					img.src = 'gfx/6.jpg';
					break;
			}
			return wynik;
	}
}