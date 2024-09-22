import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import PageRoutes from "./PageRoutes";

function App() {
  return (
    <Provider store={store}>
      <PageRoutes />
    </Provider>
  );
}

export default App;
