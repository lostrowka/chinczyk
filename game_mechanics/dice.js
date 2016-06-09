function Dice()
{
	var canvas = document.createElement('canvas');
		canvas.id     = "my_canvas_id";
		canvas.width  = 83;
		canvas.height = 83;
		canvas.style.position = "absolute";
		canvas.style.top = "0";
		canvas.style.left = "0";
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