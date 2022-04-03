import { render } from "solid-js/web";

import Counter from "remote/Counter";

import "./index.css";

const App = () => (
  <div class="container">
    <div>Name: host</div>
    <Counter />
  </div>
);
render(App, document.getElementById("app"));
