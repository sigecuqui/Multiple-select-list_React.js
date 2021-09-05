import { Component } from "react";

import ListItems from "./ListItems";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) { // Add an item to the list form
    if (this._inputElement.value !== "") {
      let newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }

  deleteItem(key) { // Delete an item from the list form
    let filteredItems = this.state.items.filter(function (item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems,
    });
  }

  handleAllItemsDeleted(i) { // Delete all items from the list form
    let items = this.state.items;

    items.splice(i, items.length);

    this.setState({
      items: items,
    });
  }

  render() {
    // const filteredList = this.props.list.filter((listItem) =>
    //   listItem.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    // );
    return (
      <div>
        <p>
          {/* {filteredList.length} / {this.props.list.length} */}
        </p>
        <div>
          <form onSubmit={this.addItem}>
            <input
              className="App-table--input"
              ref={(a) => (this._inputElement = a)}
              placeholder="Enter Item"
            ></input>
            <button className="App-button" type="submit">
              Add
            </button>
          </form>
        </div>
        <ListItems entries={this.state.items} delete={this.deleteItem} />
        <button
          className="App-button"
          onClick={this.handleAllItemsDeleted.bind(this)}
        >
          Delete All
        </button>
      </div>
    );
  }
}

export default List;
