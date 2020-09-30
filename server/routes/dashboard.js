const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");

router.post("/", authorize, async (req, res) => {
  let query =
    "SELECT firstname, lastname,user_email,address,dni,orders.id,order_items.quantity,products.product_name,order_date      FROM users join orders on users.user_id = orders.customer_id join order_items on orders.id = order_items.order_id join products on order_items.product_id = products.id WHERE user_id = $1";

  pool.query(query, [req.user.id]).then((user) => {
    if (user.rows.length <= 0) {
      pool
        .query(
          "SELECT firstname, lastname,user_email,address,dni FROM users  WHERE user_id = $1",
          [req.user.id]
        )
        .then((result) => {
          res.json(result.rows);
        })
        .catch((error) => {
          console.log(error);
          res.status(500).send("something went wrong");
        });
    } else {
      return res.json(user.rows);
    }
  });
});

module.exports = router;
