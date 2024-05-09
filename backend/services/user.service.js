const User = require("../models/user");
const zod = require("zod");

const updateSchema = zod.object({
  name: zod.string().min(3).optional(),
  email: zod.string().email().optional(),
  role: zod
    .enum(["attendee", "admin", "organizer", "author", "reviewer"])
    .optional(),
});

async function getAll() {
  const users = await User.find();
  const sanitizedUsers = users.map((user) => {
    return {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
  });
  return sanitizedUsers;
}

async function update(id, user) {
  const validatedData = updateSchema.parse(user);
  await User.findByIdAndUpdate(id, validatedData);
  return validatedData;
}

async function remove(id) {
  await User.findByIdAndDelete(id);
  return true;
}

module.exports = {
  getAll,
  update,
  remove,
};
