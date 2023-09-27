import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Playground from "./pages/Playground";
import Learn from "./pages/Learn";
import Navbar from "./components/Navigation/Navbar";
import Headroom from "react-headroom";
import Modal from "./components/Navigation/Modal";
import { AnimatePresence } from "framer-motion";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Router>
        {" "}
        <Headroom
          style={{
            webkitTransition: "all 0.8s ease-in-out",
          }}
        >
          <Navbar setShowModal={setShowModal} showModal={showModal} />
        </Headroom>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <AnimatePresence wait>
          <Routes>
            <Route
              path="/"
              element={
                <Homepage showModal={showModal} setShowModal={setShowModal} />
              }
            />
            <Route path="/playground" element={<Playground />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
};

export default App;
