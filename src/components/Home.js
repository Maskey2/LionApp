import * as React from "react";

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
