var TicTacToe = {
    init : function() {
        TicTacToe.symbols = ["X", "O"];
        TicTacToe.squares = Array.from(document.querySelectorAll(".square"));
        TicTacToe.winningSets = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        TicTacToe.addEventListeners();
        TicTacToe.newGame();
    },

    addEventListeners: function() {
        var ttt = this;
        this.squares.forEach(function(x) {
            x.addEventListener("click", function() {
                ttt.play(this);
            })
        })
    },

    newGame: function() {
        this.activePlayer = 0;
    },

    play: function(el) {
        // make sure square is not filled
        if (el.classList.length == 1) {
        // set the contents to your player's symbol
        el.classList.add(this.symbols[this.activePlayer])
        //check if you won
        if (this.checkWin()) {
            alert("win")
        }
        //check if there is a draw
        else if (this.checkDraw()) {
            alert("draw")
        }
        //go to the next player's turn
        else {
            this.activePlayer = 1 - this.activePlayer;
        }
        }
    },

    checkWin: function(){
        var ttt = this;
        return this.winningSets.some(function (x) {
            return x.every(function(i) {
                return Array.from(ttt.squares[i].classList).indexOf(ttt.symbols[ttt.activePlayer]) > -1;
            })
        })
    },

    checkDraw: function() {
        return this.squares.every(function (x) {
            x.classList.length > 1;
        })
    }
}

window.onload = TicTacToe.init;