const readline = require("readline");
const fs = require('fs');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout

});

// membuat folder data apabila tidak ada
	const data = "./data";
	

	if (!fs.existsSync (data)){
		fs.mkdirSync(data);
	}

// membuat file contacts.json jika tidak ada 
	const filepath= "./data/contacts.json";

	if (!fs.existsSync(filepath)){
		fs.writeFileSync(filepath,`[]`);
	}


		


// memasukan pertanyaan yang meng-input data
rl.question("What is your name ? ", (name) =>{
	rl.question("What is your mobile number? ", (mobile) =>{
		rl.question(`I need ur email, so can i have that ${name}? `, (email) =>{

// menambahkan variabel yang berisi data yang sudah di input dari pertan
// dan memparsing JSON
		const contact = {name,mobile,email};
		const file = fs.readFileSync(filepath,'utf-8');
		const contacts = JSON.parse(file);
		contacts.push(contact);

// menuliskan dan mengubah data JSON ke string
		fs.writeFileSync(filepath, JSON.stringify(contacts));
	
			console.log(`Thank youu ${name}, for ur entering the data !!`);

	
	rl.close();
		})
	})
})
	
