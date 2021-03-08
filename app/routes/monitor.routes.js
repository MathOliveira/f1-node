module.exports = app => {
  // User authentication
  app.get("/version", async (req, res) => {
    var pjson = process.env.npm_package_version;
    return res.send({ message: `Version: ${pjson}` });
  });

};
