import {Link} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {
  incremented,
  decremented,
} from '@/model/counter'
import { COUNTER_REDUCER_FEATURE_KEY } from '@/model/counter';

const Home = () => {
  const dispatch = useDispatch();
  const counterState = useSelector((state: IStoreState) => state[COUNTER_REDUCER_FEATURE_KEY]);

  return (
    <>
      <main>
        {counterState.value}
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <div>
        <button onClick={() => dispatch(incremented())}>incremented</button> | 
        <button onClick={() => dispatch(decremented())}>decremented</button>
      </div>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

export default Home
