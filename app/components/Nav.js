// Include React
var React = require("react");

var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <a href="#/Search" className="brand-logo">New York Times Article Scrubber</a>
            <a href="/" data-activates="mobile-demo" className="button-collapse right"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="#/Search"><i className="large material-icons">search</i></a></li>
              <li><a href="#/Search/Result"><i className="large material-icons">view_list</i></a></li>
              <li><a href="#/Search/Result/Archive"><i className="large material-icons">queue</i></a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a href="#/Search"><i className="material-icons">search</i>Search</a></li>
              <li><a href="#/Result"><i className="material-icons">view_list</i>Result</a></li>
              <li><a href="#/Archive"><i className="material-icons">queue</i>Archive</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = Nav;
