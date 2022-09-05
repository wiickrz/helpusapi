const cors = require("cors");
const jsonServer = require("json-server");
const auth = require("json-server-auth");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 3333;

app.db = router.db;

const rules = auth.rewriter({
  "/users*": "/600/users$1",
  "/courses*": "/444/courses$1",
  "/mentors*": "/444/mentors$1",
  "/purchases*": "/600/purchases$1",
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);
