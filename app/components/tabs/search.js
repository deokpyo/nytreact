// Include React
var React = require("react");
var Form = require("./Form");

var Search = React.createClass({
  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="card">
              <div className="card-content">
                <h4 className="center-align"><i className="material-icons">search</i> Search</h4>
                <hr/>
                <Form />
              </div>
            </div>
          </div>
           
        </div>
        {this.props.children}
       
      </div>
    );
  }
});

module.exports = Search;
