import "./App.css";
import LoginPage from "./LoginPage";
import Header from "./Header";
import UsersPage from "./UsersPage";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import * as apiService from "./services/apiService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

function App(props) {
  const initialUser = {
    id: null,
    name: "",
    email: "",
  };

  const [user, setUser] = useState({ ...initialUser });

  const navigate = useNavigate();

  useEffect(() => {
    const name = apiService.CheckIfLoggedIn();
    if (name) {
      setUser({
        name: name,
      });
      navigate("/");
    }
  }, []);

  async function onLoginSubmit(values) {
    let result = await apiService.logIn(values.email, values.password);

    if (result) {
      setUser({
        name: result.Name,
      });
      navigate("/");
    } else {
      alert("Invalid username or password!");
    }
  }

  function onLogout() {
    apiService.logOut();
    setUser({ ...initialUser });
    navigate("/");
  }

  return (
    <div className="container-fluid">
      <Header user={user} onLogout={onLogout} />
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <LoginPage onSubmit={onLoginSubmit} className="login-form" />
          }
        />
        <Route
          exact
          path="/"
          element={
            apiService.IsLoggedIn() ? <UsersPage /> : <Navigate to="/login" />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
