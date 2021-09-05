import { Component } from "react";

class ListItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listItems: "",
    };
    this.createItems = this.createItems.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createItems(item) {
    return (
      <li onClick={() => this.delete(item.key)} key={item.key}>
        {item.text}
      </li>
    );
  }

  render() {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createItems);

    return <ul>{listItems}</ul>;
  }
}

export default ListItems;
