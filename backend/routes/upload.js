const { Router } = require("express");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const router = Router();
const fileUpload = require("express-fileupload");

// default options
router.use(fileUpload());

router.post("/", function (req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  const basePath = path.dirname(process.argv[1]);
  const fileId = uuidv4();
  sampleFile = req.files.file;
  uploadPath = path.join(basePath, "uploads", fileId + ".pdf");

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);
    res.json({ fileId });
  });
});

module.exports = router;
