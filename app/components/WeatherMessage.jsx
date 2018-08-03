var React = require('react');

var WeatherMessage = React.createClass({

  render:function(){
      var temp = Math.round(this.props.temp);
      var location = this.props.location;
      if(temp >= 70 && temp <=84){
        return <h3 className="text-center">It's it <span className="warm">{temp}&#x2109;</span> in {location}.</h3>
      }else if(temp > 84){
        return <h3 className="text-center">It's it <span className="hot">{temp}&#x2109;</span> in {location}.</h3>
      }else{
        return <h3 className="text-center">It's it <span className="cold">{temp}&#x2109;</span> in {location}.</h3>
      }
      return (
    <div>
    <h3 className="text-center">It's it {temp} in {location}.</h3>
    </div>
  )
  }
});

module.exports = WeatherMessage;
