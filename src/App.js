import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from './Counter';
import * as CounterActions from './actions';

const mapStateToProps = (state) => ({
  value: state.counter
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(CounterActions, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
