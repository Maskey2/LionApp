import * as React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import MainContent from "./MainContent";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainContent />
      </div>
    );
  }
}
export default Home;
