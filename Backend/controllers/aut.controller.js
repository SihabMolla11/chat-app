import bcryptjs from 'bcryptjs';
import { User } from "../schema.model.js";

export const signUp = async (req, res) => {
    try {
        const { first_name, last_name, email, photo, password, confirm_password, gender } = req.body;

        const user = await User.findOne({ email });

        if (user) {
            return res.status(403).json({ error: "the email already exist, please try with another email" });
        }


        // create has password
        const hasPassword = await bcryptjs.hash(password, 10);

        const profile_photo = photo || `https://avatar.iran.liara.run/public/${gender === "male" ? "boy" : "girl"}`

        const new_user = new User({
            first_name, last_name, email, profile_photo, password, gender, password: hasPassword
        });

        await new_user.save();

        res.send({ first_name, email, message: "registration Success" })



    } catch (error) {
        console.log(error.message);
    }
}



export const login = (req, res) => {
    console.log('this is login controller file');
    return 'hi bangladesh'
}