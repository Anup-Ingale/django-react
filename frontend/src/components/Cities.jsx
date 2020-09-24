import React, { Component } from 'react'
import City from './City'
import { connect } from 'react-redux'
class Cities extends Component {
    render() {
        return (
            <div>
                {this.props.weatherData.map((weatherCity) => {
                    return (<h3 key={weatherCity.city}>{weatherCity.city}</h3>)
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        weatherData: state,
    }
}
export default connect(mapStateToProps)(Cities);