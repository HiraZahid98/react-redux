import { useSelector, useDispatch } from 'react-redux';
import classes from './App.module.css'
import { ActionCreators } from './state/index';
import {bindActionCreators} from 'redux';

function App() {

  const account = useSelector(state => state.account)
  const dispatch = useDispatch();
  const {depositMoney, withdrawMoney} = bindActionCreators(ActionCreators, dispatch);
  return (
    <div>

      <h1>Redux Application</h1>
      <p className={classes.para}>{account}</p>
      <button className={classes.dpbutton} onClick={() => depositMoney(20)}>Deposit</button>
      <button  className={classes.wdbutton} onClick={() => withdrawMoney(5)}>Withdraw</button>
    </div>
  )
}


export default App;