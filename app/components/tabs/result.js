// Include React
var React = require("react");

var Result = React.createClass({
  render: function () {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-content">
              <ul className="collection with-header">
                <li className="collection-header center-align"><h4><i className="material-icons">view_list</i> Results</h4></li>
                <li className="collection-item">Alvin</li>
                <li className="collection-item">Alvin</li>
                <li className="collection-item">Alvin</li>
                <li className="collection-item">Alvin</li>
              </ul>
              <a className="waves-effect waves-light btn" href="#/Search/Result/Archive">Save</a>
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Result;
