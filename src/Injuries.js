import React from 'react';
import $ from 'jquery';

class InjuredPlayer extends React.Component {
  render(){
    return(
      <li>
        <div>Name: {this.props.name} {this.props.lastname} </div>
        <div>Team: {this.props.team} </div>
        <div>Injury: {this.props.injury} </div>
      </li>
    )
  }
}

class Injuries extends React.Component{
  constructor(){
    super();

    this.state = {
      data: []
    };
  }

  componentDidMount(){
    $.ajax({
      url: `https://www.mysportsfeeds.com/api/feed/sample/pull/mlb/2016-2016-regular/player_injuries.json?`
    })
    .done((data) => {
      console.log(data);
      this.setState({
        data: data.playerinjuries.playerentry
      })
  });

}

render (){
  let injuredplayer = this.state.data.map((x) =>{
    console.log(x.player);
    return <InjuredPlayer key={x.player.ID} name={x.player.FirstName} lastname={x.player.LastName} team={x.team.Name} injury={x.injury} />
  });

    return (
      <div>
        <ol>
          {injuredplayer}
        </ol>
      </div>
    );
  }
}

module.exports= Injuries;
