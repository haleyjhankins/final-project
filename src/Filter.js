import React, {Component} from 'react';
import './position-filter.css';

class Filter extends Component {

  render() {
    // const filterItems = this.props.filters.map((x,i) => <li key={i + x}>{x}</li>)


    return (
      <div className="position-filter">
        <h2>Filter by position</h2>
        <input
          placeholder="Search By Position"
          value={this.props.inputValue}
          onChange={(evt) => this.props.onInputChange(evt.target.value)}
          onKeyUp={(evt) => this.handleKeyUp (evt)} />

        <ol>
        </ol>
      </div>
    );
  }
}

module.exports= Filter;
