// Include React
var React = require("react");

var Form = React.createClass({
    render: function () {
        return (
            <form>
                <label>
                    Name:
    <input type="text" name="name" />
                </label>
                <label>
                    Start Year:
    <input type="text" name="startyear" />
                </label>
                <label>
                    End Year:
    <input type="text" name="endyear" />
                </label>
                <a className="waves-effect waves-light btn" href="#/Search/Result">Submit</a>
            </form>

        );
    }
});

module.exports = Form;
