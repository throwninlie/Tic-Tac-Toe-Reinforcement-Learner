function drawX(ctx,row,col,pixSquare){
	var halfSquare = pixSquare/2;

	var x = halfSquare + pixSquare*col;
	var y = halfSquare + pixSquare * row;
	ctx.lineWidth = 8;
	ctx.strokeStyle = "red";
	ctx.beginPath();
	var drawSize = halfSquare*0.6;
	ctx.moveTo(x-drawSize,y-drawSize);
	ctx.lineTo(x+drawSize,y+drawSize);
	ctx.moveTo(x+drawSize,y-drawSize);
	ctx.lineTo(x-drawSize,y+drawSize);
	ctx.stroke();
		
}

function drawO(ctx,row,col,pixSquare){

	var halfSquare = pixSquare/2;
	ctx.strokeStyle = "black";
	var x = halfSquare + pixSquare*col;
	var y = halfSquare + pixSquare * row;
	var drawSize = halfSquare*0.6;
	ctx.lineWidth = 8;
	ctx.beginPath();
	ctx.arc(x,y,drawSize,0,2*Math.PI,false);
	ctx.stroke();
}

function drawBoard(ctx,size,pixSquare){

	ctx.lineWidth = 10;
	ctx.beginPath();
	var currentX = 0;
	var currentY = 0;
	for( x =0; x < size-1; x++){
		currentX += pixSquare;
		currentY += pixSquare;
		ctx.moveTo(currentX,0);
		ctx.lineTo(currentX,pixSquare*size);
		ctx.moveTo(0,currentY);
		ctx.lineTo(pixSquare*size,currentY);

	}
	console.log("drew board");
	ctx.stroke();

}

function drawLineRow(ctx,canvas,row,color,pixSquare){
	ctx.strokeStyle = color;
	ctx.lineWidth = 8;
	ctx.beginPath();
	ctx.moveTo(0,row*pixSquare + pixSquare/2);
	ctx.lineTo(canvas.width,row*pixSquare + pixSquare/2);
	ctx.stroke();
}

function drawLineColumn(ctx,canvas,col,color,pixSquare){
	ctx.strokeStyle = color;
	ctx.lineWidth = 8;
	ctx.beginPath();
	ctx.moveTo(col*pixSquare + pixSquare/2,0);
	ctx.lineTo(col*pixSquare + pixSquare/2,canvas.height);
	ctx.stroke();

}

function drawLine(ctx,xF,yF,xT,yT,color){
	ctx.strokeStyle = color;
	ctx.lineWidth = 8;
	ctx.beginPath();
	ctx.moveTo(xF,yF);
	ctx.lineTo(xT,yT);
	ctx.stroke();

}