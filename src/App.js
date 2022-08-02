import { ToastContainer } from "react-toastify";
import AppRouter from "./app-router/AppRouter";
import "./App.css";
import AuthContextProvider from "./contexts/AuthContext";
import BlogContextProvider from "./contexts/BlogContext";

function App() {
  return (
    <div className="App">
      <BlogContextProvider>
        <AuthContextProvider>
          <AppRouter />
          <ToastContainer />
        </AuthContextProvider>
      </BlogContextProvider>
      
    </div>
  );
}

export default App;
