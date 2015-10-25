import React from "react";
import SiteBg from "./SiteBg";
import SiteTitle from "./SiteTitle";
import Products from "./Products";
import Cart from "./Cart";
import Checkout from "./Checkout";


//App component
export default class App extends React.Component {
  componentDidMount() {
    let toggle = React.findDOMNode(this.refs.toggle);
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("js-show-right-sidebar");
    });
  }
  render() {
    return (
      <div className="site">
        <SiteBg />
        <div className="site__main">
            <div className="site__left-sidebar">
                <SiteTitle />
            </div>

            <div className="site__content">
                <Products />
            </div>
        </div>

        <div className="site__right-sidebar">
            <Cart />
            <Checkout />
        </div>
        <a className="site__right-sidebar-toggle" ref="toggle">
          <img src="img/arrow-icon.svg"/>
        </a>
    </div> 
    );
  }
}






