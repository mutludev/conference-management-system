const User = require("../models/user");
const crypto = require("crypto");
const zod = require("zod");

const registerSchema = zod.object({
  name: zod.string().min(3),
  email: zod.string().email(),
  password: zod.string().min(6),
  role: zod.enum(["attendee"]),
});

async function login(email, password) {
  let passwordHash = crypto.createHash("sha256").update(password).digest("hex");
  const user = await User.findOne({
    email,
    password: passwordHash,
  });
  if (!user) {
    throw new Error("Invalid email or password");
  }
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
}

async function register(userData) {
  const validatedData = registerSchema.safeParse(userData);
  if (!validatedData.success) {
    throw new Error({ status: 400, message: "Invalid user data" });
  }

  const user = new User({
    name: validatedData.data.name,
    email: validatedData.data.email,
    password: crypto
      .createHash("sha256")
      .update(validatedData.data.password)
      .digest("hex"),
    role: validatedData.data.role,
  });
  await user.save();
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
}

async function getUser(userId) {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
}

module.exports = {
  login,
  register,
  getUser,
};
