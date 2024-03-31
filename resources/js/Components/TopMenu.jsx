import { IoMdAdd, IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import React from 'react';
import CreatePostButton from "@/Components/CreatePostButton"; 
import '../../css/TopMenu.css';

export default function TopMenu(){

    return (
      <div className="top-row">
            <CreatePostButton/>
            <div className="search-bar">
                <IoMdSearch className="icon"></IoMdSearch>
                <input type="text" placeholder="Search" />
            </div>
            <button>
              <CgProfile className="profile"/>
            </button>
      </div>  
    );
}
