import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      {/* <Link to="./topics">Topics</Link> */}
      <button onClick={() => props.history.push("./topics")}>Topics</button>
      <h1>HATS PAGE</h1>
    </div>
  );
};

const TopicList = (props) => {
  console.log(props);
  return (
    <div>
      <h1>TopicList PAGE</h1>
      <Link to={`${props.match.url}/13`}>Topics 13</Link>
      <Link to={`${props.match.url}/17`}>Topics 17</Link>
      <Link to={`${props.match.url}/21`}>Topics 21</Link>
    </div>
  );
};

const TopicDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>TopicDetail Page: {props.match.params.topicId}</h1>
    </div>
  );
};
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
      {/* <Route exact path="/topics" component={TopicList} />
      <Route path="/topics/:topicId" component={TopicDetail} /> */}
    </div>
  );
}

export default App;
