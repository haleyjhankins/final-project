import React from 'react';
import './players.css';
import $ from 'jquery';
import Query from './Query.js';
import Filter from './Filter.js';




class Player extends React.Component{
  render(){
    return(
      <li>
        <div className="query-bar">
          <input
            placeholder="Search By Team"
            value={this.props.inputValue}
            onChange={(evt) => this.props.onInputChange(evt.target.value)}
            onKeyUp={(evt) => this.handleKeyUp(evt)} />
        </div>

        <h2 className="name"> Name: {this.props.name} {this.props.lastname} </h2>
        <div> Team: {this.props.team}</div>
        <div> Position: {this.props.position}</div>
        <div> Birth Date: {this.props.birthdate}</div>
        <div> Age: {this.props.age}</div>
      </li>
    )
  }
}

class Players extends React.Component{
  constructor(){
    super();

    this.state = {
      data: []
    };
  }


  handleKeyUp(evt) {
    if (evt.keyCode ===13){
      this.props.onInputComplete();
    }
  }
    render(){
      let player = this.state.data.map((x) => {
        return <Player key={x.player.ID} name={x.player.FirstName} lastname={x.player.LastName} team={x.team.Name} position={x.player.Position} birthdate={x.player.BirthDate} age={x.player.Age}/>
      });


      return (
        <div className="player">
          <ol>
            <li>
              <div className="details">
              {player}
              </div>
            </li>
          </ol>
        </div>


      );
    }
  }





module.exports= Players;
