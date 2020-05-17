import React, { Component } from 'react';

class Weather extends Component {
    state = {  }
    render() { 
        return ( 
          <div className="weather__info">
             { 
                 this.props.city && this.props.country && <p className="weather__key">Location : 
                 <span className="weather__value">{this.props.city} , {this.props.country}</span> </p> 
                 }
        {
            this.props.city && <p className="weather__key">Temperature :
            <span className="weather__value">{this.props.temperature}</span> </p> 
            } 
        {
            this.props.city && <p className="weather__key">Humidity :
                 <span className="weather__value">{this.props.humidity}</span></p> 
            }
        {
            this.props.city && <p className="weather__key">Conditions : 
            <span className="weather__value">{this.props.description}</span></p> 
            } 
        {
            this.props.error && <p> {this.props.error}</p> 
            } 
        
              

          </div>


         );
    }
}
 
export default Weather;