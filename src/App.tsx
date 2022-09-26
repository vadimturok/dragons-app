import React, {useEffect} from 'react';
import AppRoutes from "./components/Routes/AppRoutes";
import {useAppDispatch} from "./hooks";
import {fetchDragon} from "./store/reducers/dragon/actionCreators";
import {fetchDragons} from "./store/reducers/dragons/actionCreators";
import {ErrorBoundary} from "react-error-boundary";
import {useNavigate} from "react-router-dom";
import ErrorFallback from "./components/ErrorFallback/ErrorFallback";

function App() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDragon())
    dispatch(fetchDragons())
  }, [dispatch])

  return (
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => navigate('/')}>
        <AppRoutes/>
      </ErrorBoundary>
  )
}

export default App;
