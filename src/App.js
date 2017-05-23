import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from './Counter';
import * as CounterActions from './actions';

const mapStateToProps = (state) => ({
  counter: state.value
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(CounterActions, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
