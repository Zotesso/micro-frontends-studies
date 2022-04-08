const Express = require("express");
const productData = require("./productsData.json");
const path = require("path");
const cors = require("cors");

const App = Express();

App.use(cors());
App.use(Express.static('public'))

App.get("/products", (req, res) => {
  res.send(productData);
});

App.get("/product/:id", (req, res) => {
  productData.find((product) => {
    if (product.id === parseInt(req.params.id)) {
      const options = {
        root: path.join(__dirname, "assets/images/"),
      };

      res.sendFile(product.imageUrl, options, (err) => {
        if (err) {
          res.sendStatus(404);
        } else {
          console.log("File sent to client");
        }
      });
    }
  });
  
});

App.listen(5555, () => {
  console.log("Application started on port 5555");
});
