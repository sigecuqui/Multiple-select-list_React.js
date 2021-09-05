import { Component } from "react";
import PropTypes from "prop-types";

import SearchBar from "./SearchBar";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      items: [],
    };
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value,
    });
  }

  handleClick() {
    var items = this.state.items;

    items.push(this.state.message);

    this.setState({
      items: items,
      message: "",
    });
  }

  handleItemChanged(i, event) {
    var items = this.state.items;
    items[i] = event.target.value;

    this.setState({
      items: items,
    });
  }

  handleItemDeleted(i) {
    var items = this.state.items;

    items.splice(i, 1);

    this.setState({
      items: items,
    });
  }

  handleAllItemsDeleted(i) {
    var items = this.state.items;

    items.splice(i, items.length);

    this.setState({
      items: items,
    });
  }

  renderRows() {
    var context = this;

    return this.state.items.map(function (o, i) {
      return (
        <tbody>
          <tr key={"item-" + i}>
            <td>
              <input
                className="App-table--input"
                type="text"
                value={o}
                onChange={context.handleItemChanged.bind(context, i)}
              />
            </td>
            <td>
              <button
                className="App-button"
                onClick={context.handleItemDeleted.bind(context, i)}
              >
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      );
    });
  }

  render() {
    const { filterText } = this.state;
    return (
      <div className="App-table--box">
        <h1>List box React.js</h1>
        <button className="App-button" onClick={this.handleClick.bind(this)}>
          Add Item
        </button>
        <input
          className="App-table--input"
          type="text"
          value={this.state.message}
          onChange={this.updateMessage.bind(this)}
        />

        <hr />

        <table className="App-table table table-dark">
          <thead>
            <tr>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>{this.renderRows()}</tbody>
          <button
            className="App-button"
            onClick={this.handleAllItemsDeleted.bind(this)}
          >
            Delete All
          </button>
          <SearchBar
            filterText={filterText}
            onFilterTextInput={this.handleFilterTextInput}
          />
        </table>
      </div>
    );
  }
}
Table.propTypes = {
  filterText: PropTypes.string.isRequired,
};

export default Table;
