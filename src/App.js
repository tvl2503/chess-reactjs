import GloablStyles from "./components/GloablStyles";
import Layout from "./components/Layout/Layout";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ToastContainer autoClose={2000} />
        <GloablStyles>
          <Layout />
        </GloablStyles>
      </PersistGate>
    </Provider>
  );
}

export default App;
