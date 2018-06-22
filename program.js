//program.js

process.stdin.setEncoding('utf-8');
/*
process.stdin.on('readable', function() {
    // tutaj treść tego, co ma się wykonać w momencie odczytania wejścia.
    var input = process.stdin.read(); // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    if(input !== null) {
        // teraz jest sens cokolwiek wyświetlać :)
            process.stdout.write(input);
    }
});
*/
process.stdin.on('readable', function() { 
    var input = process.stdin.read(); //metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    if (input !== null) {
        var instruction = input.toString().trim();
        /*if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else {
            process.stderr.write('Wrong instruction!\n');
        }
    }*/
    	switch (instruction) {
      		case "/exit":
        		process.stdout.write("Quitting app!\n");
        		process.exit();
        		break;
      		case "language":
        		console.log(process.env.lang);
        		break;
      		case "node":
        		console.log(process.versions.node);
        		break;
      		default:
        		process.stderr.write("Wrong instruction!\n");
    	}
	}
});