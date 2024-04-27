import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Faq } from "../Pages/Faq";
import { Contact } from "../Pages/Contact";
import { Flashcard } from "../Pages/Flashcard";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="flashcard" element={<Flashcard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </>
  );
};
