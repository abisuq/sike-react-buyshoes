const React = require("react");
const SiteBg = require("./SiteBg");
const SiteTitle = require("./SiteTitle");
const Products = require("./Products");
const Cart = require("./Cart");
const Checkout = require("./Checkout");

//App component
let App = React.createClass({
  componentDidMount() {
    let toggle = React.findDOMNode(this.refs.toggle);
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("js-show-right-sidebar");
    });
  },
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
});

module.exports = App;







