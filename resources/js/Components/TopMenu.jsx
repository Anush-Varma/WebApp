import { IoMdAdd, IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import React from 'react';
import '../../css/TopMenu.css';

export default function TopMenu(){
    return (
      <div className="top-row">
            <IoMdAdd className="create"></IoMdAdd>
            <div className="search-bar">
                <IoMdSearch className="icon"></IoMdSearch>
                <input type="text" placeholder="Search" />
            </div>
            <CgProfile className="profile"></CgProfile>
      </div>  
    );
}
