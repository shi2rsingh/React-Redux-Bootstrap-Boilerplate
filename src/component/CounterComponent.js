import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {incrementCounter, decrementCounter} from '../actions';
import {connect} from 'react-redux';

class CounterComponent extends Component {
  render() {
    return (
      <div className="row">
      <div className="container">
       
        <button className="btn btn-primary" onClick={()=> this.props.decrementCounter()} >Decrement - </button>
            <h3>Count: <span className="badge badge-secondary">{this.props.count}</span></h3>
        <button className="btn btn-primary" onClick={()=> this.props.incrementCounter()}>Increment + </button>
        </div>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({incrementCounter: incrementCounter, 
                                decrementCounter: decrementCounter}, dispatch);
}

function mapStateToProps(state) {
    console.log('mapstatetoprops',state);
    
    return {
        count: state.cc.count
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(CounterComponent);
