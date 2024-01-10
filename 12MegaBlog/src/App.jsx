import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authservice from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authservice
      .getCurrentuser()
      //01 DOUBT: what data will be fetched by getCurrentUser
      //        and from where it gets ?
      .then((userData) => {
        //02 DOUBT  : is it necessary to use then ?
        // ANS : so we will be able to handle the
        //       result of the data returned
        if (userData) {
          dispatch(login({ userData }));
          // DOUBT: is it necessary to pass as object
          // ANS: suppose if there are multiple varibles
          //      in payload , then we should pass as an
          //      object , otherwise we can pass normally
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div
      className="min-h-screen flex flex-wrap
      content-between bg-gray-100"
    >
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
