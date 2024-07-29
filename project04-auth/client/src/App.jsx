import { BrowserRouter as Router, Route,  Routes  } from "react-router-dom";

//pages
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route  path="/" element={<HomePage/>} />
        <Route exact path="/signup" element={<SignupPage/>} />
        <Route exact path="/login" element={<LoginPage/>} />
        <Route exact path="/user" element={<UserPage/>} />
        <Route exact path="/forgot-password" element={<ForgotPasswordPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
