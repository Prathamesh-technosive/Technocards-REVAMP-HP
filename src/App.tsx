import { Toaster } from "react-hot-toast";
import "react-international-phone/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/auth/signIn/index.tsx";
import SignUp from "./pages/auth/signUp/index.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
