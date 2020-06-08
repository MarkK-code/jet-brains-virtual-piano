/*let kboard = document.getElementsByTagName("kbd")*/


document.addEventListener("keydown", function(event) {
    if (event.code == "KeyA") {
        console.log("The 'A' key is pressed.");
        //var keyA = new Audio('A.mp3');
        //keyA.play();
        //document.getElementById('key_A').play();
        let key_A = new Audio("white_keys/A.mp3");
        key_A.play();
    }
    else if (event.code == "KeyS") {
        console.log("The 'S' key is pressed.");
        //document.getElementById('key_S').play();
        let key_S = new Audio("white_keys/S.mp3");
        key_S.play();
    }
    else if (event.code == "KeyD") {
        console.log("The 'D' key is pressed.");
        //document.getElementById('key_D').play();
        let key_D = new Audio("white_keys/D.mp3");
        key_D.play();

    }
    else if (event.code == "KeyF") {
        console.log("The 'F' key is pressed.");
        //document.getElementById('key_F').play();
        let key_F = new Audio("white_keys/F.mp3");
        key_F.play();
    }
    else if (event.code == "KeyG") {
        console.log("The 'G' key is pressed.");
        //document.getElementById('key_G').play();
        let key_G = new Audio("white_keys/G.mp3");
        key_G.play();
    }
    else if (event.code == "KeyH") {
        console.log("The 'H' key is pressed.");
        //document.getElementById('key_H').play();
        let key_H = new Audio("white_keys/H.mp3");
        key_H.play();
    }
    else if (event.code == "KeyJ") {
        console.log("The 'J' key is pressed.");
        //document.getElementById('key_J').play();
        let key_J = new Audio("white_keys/J.mp3");
        key_J.play();
    }
    else if (event.code == "KeyW") {
        console.log("The 'W' key is pressed.");
        let key_W = new Audio("black_keys/W.mp3");
        key_W.play();
    }
    else if (event.code == "KeyE") {
        console.log("The 'E' key is pressed.");
        let key_E = new Audio("black_keys/E.mp3");
        key_E.play();
    }
    else if (event.code == "KeyT") {
        console.log("The 'T' key is pressed.");
        let key_T = new Audio("black_keys/T.mp3");
        key_T.play();
    }
    else if (event.code == "KeyY") {
        console.log("The 'Y' key is pressed.");
        let key_Y = new Audio("black_keys/Y.mp3");
        key_Y.play();
    }
    else if (event.code == "KeyU") {
        console.log("The 'U' key is pressed.");
        let key_U = new Audio("black_keys/U.mp3");
        key_U.play();
    }
    else {
        console.log("Other key was pressed.")
    }
});