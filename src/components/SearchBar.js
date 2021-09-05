import PropTypes from "prop-types"; //PropTypes exports a range of validators that can be used to make sure the data you receive is valid.

const SearchBar = (props) => {
  const { onFilterTextInput, filterText } = props;

  const handleFilterTextInputChange = (e) => {
    onFilterTextInput(e.target.value);
  };

  return (
    <input
      className="App-table--input"
      type="text"
      placeholder="Search..."
      value={filterText}
      onChange={handleFilterTextInputChange}
    />
  );
};

SearchBar.propTypes = {
  //Use prop-types
  filterText: PropTypes.string.isRequired,
  onFilterTextInput: PropTypes.func.isRequired,
};

export default SearchBar;
