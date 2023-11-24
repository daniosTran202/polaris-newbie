import React from "react";
import { Route, Routes } from "react-router-dom";
import Task from "./components/Tasks/Task";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Member from "./components/Members/members";
import Subscribe from "./components/Subscribe/subscribe";
import FAQ from "./components/FAQ/faq";
import InviteFriend from "./components/InviteFriend/inviteFriend";
import Settings from "./components/Settings/setting";

const RoutesNav = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/task" element={<Task />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/invite-friends" element={<InviteFriend />}></Route>
      <Route path="/member-perks" element={<Member />}></Route>
      <Route path="/subscribe" element={<Subscribe />}></Route>
      <Route path="/faq" element={<FAQ />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
    </Routes>
  );
};

export default RoutesNav;
