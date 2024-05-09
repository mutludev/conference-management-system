const zod = require("zod");

const conferenceSchema = zod.object({
  name: zod.string().min(3),
  date: zod.string(),
  location: zod.string().min(3),
  tags: zod.array(zod.string()),
});

function sanitizeConference(conference) {
  const { _id, name, location, tags } = conference;
  return {
    id: _id,
    name,
    location,
    tags,
  };
}

function validateConference(conference) {
  const validatedConference = conferenceSchema.safeParse(conference);
  if (!validatedConference.success) {
    throw new Error("Invalid conference data");
  }
  return validatedConference.data;
}

module.exports = {
  sanitizeConference,
  validateConference,
};
