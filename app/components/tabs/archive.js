// Include React
var React = require("react");

var Archive = React.createClass({
  render: function() {
    return (
        <div className="col s12">
          <div className="card">
            <div className="card-content">
              <ul className="collection with-header">
                <li className="collection-header center-align"><h4><i className="material-icons">queue</i> Saved Articles</h4></li>
                <li className="collection-item">Alvin</li>
                <li className="collection-item">Alvin</li>
                <li className="collection-item">Alvin</li>
                <li className="collection-item">Alvin</li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
});

module.exports = Archive;
