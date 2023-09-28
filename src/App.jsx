import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Playground from "./pages/Playground";
import Learn from "./pages/Learn";
import Navbar from "./components/Navigation/Navbar";
import Headroom from "react-headroom";
import { AnimatePresence } from "framer-motion";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Alphabets from "./pages/Alphabets";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import QuizPage from "./pages/Quiz";
import NumbersPage from "./pages/Numbers";
import PhrasesPage from "./pages/Pharses";

const App = () => {
  return (
    <div>
      <Router>
        {" "}
        <Headroom
          style={{
            webkitTransition: "all 0.8s ease-in-out",
          }}
        >
          <Navbar />
        </Headroom>
        <AnimatePresence wait>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/learn/alphabets" element={<Alphabets />} />
            <Route path="/learn/numbers" element={<NumbersPage />} />
            <Route path="/learn/phrases" element={<PhrasesPage />} />
            <Route path="/learn/quiz" element={<QuizPage />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </AnimatePresence>
      </Router>
      <ToastContainer/>
    </div>
  );
};

export default App;
