const db = require("../utility/databse");
module.exports = class Blogs {
  static getBlogs() {
    return db.execute("select * from blogs");
  }
  static addBlogs(data) {
    return db.execute(
      "insert into blogs(blogstitle,blogsDescription,bloggerName)values(?,?,?)",
      [ data.title, data.description, data.name]
    );
  }
};
