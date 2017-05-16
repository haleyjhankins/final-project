import React, {Component} from 'react';
import './position-filter.css';

class Filter extends Component {

  render() {
    // const filterItems = this.props.filters.map((x,i) => <li key={i + x}>{x}</li>)


    return (
      <div className="position-filter">
        <input
          placeholder="Filter By Position"
          value={this.props.inputValue}
          onChange={(evt) => this.props.onInputChange(evt.target.value)}
          onKeyUp={(evt) => this.handleKeyUp (evt)} />

        <ol>
          <li></li>
        </ol>
      </div>
    );
  }
}

module.exports= Filter;
