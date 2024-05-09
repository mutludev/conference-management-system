const zod = require("zod");

const paperSchema = zod.object({
  title: zod.string(),
  abstract: zod.string(),
  keywords: zod.array(zod.string()),
  file: zod.string(),
  conference: zod.string(),
});

function validatePaper(paper) {
  const validatedPaper = paperSchema.safeParse(paper);
  if (!validatedPaper.success) {
    throw new Error("Invalid paper data");
  }
  return validatedPaper.data;
}

module.exports = {
  validatePaper,
};
