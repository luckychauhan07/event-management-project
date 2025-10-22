const db = require("../utils/databaseUtil");

module.exports = class User {
	constructor(firstName, lastName, email, age, gender, password, id) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.age = age;
		this.gender = gender;
		this.password = password;
		this.id = id;
	}
	save() {
		// 	console.log(this.id);
		// 	if (this.id) {
		// 		console.log("update operation");
		// 		return db.execute(
		// 			"UPDATE homes SET housename = ?, price = ?, rating = ?, photourl = ?, description = ?, location = ? WHERE idhomes = ?",
		// 			[
		// 				this.houseName,
		// 				this.price,
		// 				this.rating,
		// 				this.photoUrl,
		// 				this.description,
		// 				this.location,
		// 				this.id, // assuming you have the id stored as `this.id`
		// 			]
		// 		);
		// 	} else {
		console.log("new home operation", this.email);
		return db.execute(
			"INSERT INTO user (firstName,lastName,email,contactNumber,gender,password) VALUES(?,?,?,?,?,?)",
			[
				this.firstName,
				this.lastName,
				this.email,
				this.age,
				this.gender,
				this.password,
			]
		);

		// 	}
	}

	static findUserByEmail(email) {
		return db.execute("SELECT * FROM user WHERE email =?", [email]);
	}
	// static fetchAll() {
	// 	return db.execute("SELECT * FROM homes");
	// }
	static updateById(userId) {
		return db.execute(
			"UPDATE user SET token_version = token_version + 1 WHERE id = ?",
			[userId]
		);
	}
};
