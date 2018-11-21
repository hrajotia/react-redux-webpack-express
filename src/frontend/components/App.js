import React from 'react';
import { connect } from 'react-redux';

import {fetchData} from '../actions/dataAction';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getPropData();
  }

  render() {
    console.log(this.props.dataProp)
    return (
      <div>
        <p>React here!</p>
        <p>{JSON.stringify(this.props.dataProp)}</p>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    dataProp: state.data
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPropData: () => dispatch(fetchData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
