import React from 'react';
import './players.css';
import $ from 'jquery';




class Player extends React.Component{
  render(){
    return(
      <li>
        <div> Name: {this.props.name} {this.props.lastname} </div>
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

  componentDidMount(){
    $.ajax({
      url: `https://www.mysportsfeeds.com/api/feed/sample/pull/mlb/2016-2016-regular/roster_players.json?fordate=20160405&`
    })
    .done((data) => {
      this.setState({
        data: data.rosterplayers.playerentry
      })
    });

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
