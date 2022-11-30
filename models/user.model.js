const bcrypt = require('bcryptjs');
const { init } = require("../data/db");
const { ObjectId } = require("mongodb");

class User {
  constructor(data) {
    this.email = data.email; 
    this.password = data.password; 
    this.fullname = data.fullname; 
    this.address = {
      street: data.street,
      postalCode: data.postal,
      city: data.city
    }; 
  }

  static create(data) {
    return new Promise(async (res, rej) => {
      try {
        const hashedPassword = await bcrypt.hash(data.password, 12);
        console.log(hashedPassword)
        console.log("data: ");
        console.log(data);

        const user = new User({
          ...data, password: hashedPassword
        });

        console.log(user);
        const db = await init();

        user.id = await (await db
          .collection("users")
          .insertOne({
            user
          })).insertedId.toString();

     

        console.log('\nuser data:');
        console.log(user);
       
        res(user);
      } catch (err) {
        rej(`[ERROR}: user could not be created\n ${err}`);
      }
    });
  }
} //class end 


module.exports = User;