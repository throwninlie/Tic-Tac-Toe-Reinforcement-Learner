

var Rules = function(board){


	this.makeMove = function(playerMove,row,col){

		var validMoves = board.validMoves();
		//console.log(validMoves.length);
		var moveValid = false;
		for(move in validMoves){
			if(validMoves[move]['col'] == col && validMoves[move]['row'] == row){
				moveValid = true;
			}

		}

		if(moveValid){
			//console.log("add move");
			board.add(playerMove, row, col);
		}
		return moveValid;
	}

	this.winCondition = function(playerTurn,size){

		var moves = board.getAllMovesForPlayer(playerTurn);
		var moveChains = {};
		moveChains["diagonalLeft"]= [];
		moveChains["diagonalRight"] = [];


		for(j = 0; j < size; j++){
			var nameX = "x" + String(j);
			var nameY = "y" + String(j);
			moveChains[nameX]=[];
			moveChains[nameY]=[];


		}
		for(move in moves){
			var pushedX = false;
			var pushedY = false;
			for(x =0; x < size; x++){
				var nameX = "x" + String(x);
				if(moves[move].col == x && !pushedX){
					moveChains[nameX].push(moves[move]);
					pushedX = true;
					//console.log("pushed col coord: " + String(moves[move].col));

				}
				for(y=0; y < size; y++){
					var nameY = "y" + String(y);

					if(moves[move].col == x && moves[move].row == y && x == y){
						//on a diagonal
						moveChains["diagonalLeft"].push(moves[move]);
						//console.log("pushed diagonal left");
					}
					if(moves[move].col == x && moves[move].row == y && y == (size-1-x)){
						moveChains["diagonalRight"].push(moves[move]);
						//console.log("pushed diagonal right");
					}

					if(moves[move].row == y && !pushedY){
						moveChains[nameY].push(moves[move]);
						pushedY = true;
						//console.log("pushed row coord: " + String(y));
					}
				}

			}

		}
		var winCondition = false;
		for(moveChain in moveChains){
			//console.log(moveChain);

			for(move in moveChains[moveChain]){
				console.log(moveChain);
				console.log(moveChains[moveChain][move]);
			}
			if(moveChains[moveChain].length == size){

				winCondition = true;
				return [winCondition, moveChain];
			}
		}
		return [winCondition];
	}


}