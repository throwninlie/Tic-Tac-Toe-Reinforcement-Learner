
var Board = function(size){

	this.boardSize = size;
	this.square = new Array(this.boardSize);
	//make empty board
	for(var i = 0; i < this.boardSize; i++){
		//console.log("square: " + i);
		this.square[i] = [];

	}

	this.isValidLocation = function(row,col){
		if(row < 0  || col < 0 || row >= this.boardSize || col  >= this.boardSize){
			return false;
		}else{
			return true;
		}

	}


	this.isEmptyLocation = function(row,col){

		if(this.getPlayerMoveAt(row,col)){
			//console.log("player move is false");
			return false;
		}
		//console.log("player move empty");

		return true;
	}


	this.getPlayerMoveAt = function(row,col){
		if(this.isValidLocation(row,col)){
			return this.square[row][col];
		}
	}

	this.getLocationOf = function(move){
		return {row:move.row, col:move.col};
	}

	this.getAllMoves = function(){

		var results = [];

		for(var r in this.square){
			for(var c in this.square[r]){
				if(this.square[r][c]){
					console.log("pushed: " + this.square[r][c]);
					results.push(this.square[r][c]);
				}

			}
		}
		return results;

	}

	this.add = function(playerMove, row, col){

		if(this.isEmptyLocation(row,col)){
			//console.log("lol");
			//var details = {move:playerMove, row:row, col:col};
			playerMove.row = row;
			playerMove.col = col;

			this.square[row][col] = playerMove;
			//console.log("move: " + playerMove.move);
			//console.log("row: " + playerMove.row, ", col:" + playerMove.col);
			//this.dispatchBoardEvent("add",details);
		}
	}

	this.removeAt = function(row,col){
		if(!this.square[row][col]){
			alert("no checker at " + r + "," + c);

		}else{
			//var details = {checker:this.square[row][col],row:row,col:col};

			delete this.square[row][col];

			//this.dispatchBoardEvent("remove",details);
		}

	}
	//remove all checkers from board

	this.clear = function(){
		for(var r in this.square){
			for(var c in this.square){
				if(this.square[r][c]){
					this.removeAt(r,c);
				}
			}
		}

	}

	this.validMoves = function(){
		var validMoves = []
		for(var r in this.square){
			for(var c in this.square){
				if(this.isEmptyLocation(r,c)){
					validMoves.push({'col':c, 'row':r});
				}
			}
		}
		return validMoves;
	}

	this.getAllMovesForPlayer = function(player){

		var results = [];

		for(var r in this.square){
			for(var c in this.square[r]){
				if(this.square[r][c]){
					//console.log("be square");
					if(this.square[r][c].move == player)
						//console.log("pusheD");
						results.push(this.square[r][c]);
				}

			}
		}
		//console.log("results length: " +results.length);
		return results;

	}




}