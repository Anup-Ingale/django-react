import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ADD_WEATHER, addWeather } from '../redux/actions';

class InputWeather extends Component {
    state = {
        inputString: "",
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.inputString} onChange={(e) => {
                    this.state.inputString = e.target.value;
                    this.setState(() => {
                        return {
                            inputString: this.state.inputString
                        }
                    });
                }} />
                <button onClick={() => {
                    if (this.state.inputString != '') {
                        this.props.dispatch(addWeather({ input: this.state.inputString }))
                        this.state.inputString = ""
                        this.setState(() => {
                            return {
                                inputString: this.state.inputString
                            }
                        });
                    }
                }}>ADD</button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        weatherData: state,
    }
}
export default connect(mapStateToProps)(InputWeather);