// Include React
var React = require("react");
var Nav = require("./Nav");

var Main = React.createClass({

  // Here we render the function
  render: function () {

    return (
      <div>
        <Nav />
        {/* This code will dump the correct Child Component */}
        {this.props.children}>
      </div>
    );
  }
});

// Export the componen back for use in other files
module.exports = Main;
