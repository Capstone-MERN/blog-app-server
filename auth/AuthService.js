import { User } from "../models/UserModel.js";

export async function saveUser({ name, email, password, gender }) {
  try {
    const user = new User({
      name,
      email,
      // TODO: make sure to hash the password before saving in DB.
      password,
      gender,
    });
    const unused = await user.save();
    return true;
  } catch (error) {
    console.log(`Failed to create user with email: ${email}`, error.message);
    return false;
  }
}
