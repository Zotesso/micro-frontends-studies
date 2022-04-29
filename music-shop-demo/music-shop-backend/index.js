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

App.get("/product/image/:id", (req, res) => {
  productData.find((product) => {
    if (product.id === parseInt(req.params.id)) {
      const options = {
        root: path.join(__dirname, "assets/images/"),
      };
      console.log(product);
      res.sendFile(product.imageUrl, options, (err) => {
        if (err) {
          console.log(err);
          res.sendStatus(404);
        } else {
          console.log("File sent to client");
        }
      });
    }
  });
});

App.get("/product/:id", (req, res) => {
  productData.find((product) => {
    if (product.id === parseInt(req.params.id)) {
      res.send(product);
    }
  });
});

App.listen(5555, () => {
  console.log("Application started on port 5555");
});
