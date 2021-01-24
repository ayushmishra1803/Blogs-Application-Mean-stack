const blogs = require("../model/blogs");
exports.getBlogs = (req, res, next) => {
  blogs
    .getBlogs()
    .then(([rows, fields]) => {
      console.log(rows);

      const data = {
        status: 200,
        message: "Blogs Featched",
        data: rows,
      };
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.addBlogs = (req, res) => {
  console.log(req.body);
  const data = {
    title: req.body.title,
    description: req.body.description,
    name: req.body.name,
  };
  blogs
    .addBlogs(data)
    .then(([rows, fields]) => {
      console.log(rows);
      const data = {
        status: 200,
        message: "blogs Added",
        data: null,
      };
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
