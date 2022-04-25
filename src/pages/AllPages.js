import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Market from "../pages/Market";
import Create from "../pages/Create";
import Contact from "../pages/Contact";
import EditProfile from "../pages/EditProfile";
import NFTDetailsPage from "../pages/NFTDetailsPage";
import SellerProfile from "../pages/SellerProfile";
import Wallet from "../pages/Wallet";

const AllPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/create" element={<Create />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/details/:id" element={<NFTDetailsPage />} />
        <Route path="/seller-profile" element={<SellerProfile />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </>
  );
};

export default AllPages;
