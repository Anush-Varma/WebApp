import { IoMdAdd, IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import React from 'react';
import '../../css/TopMenu.css';

export default function CreatePostButton(){

    
    const buttonClicked = () =>{
        window.location.href = "/create";
    }


    return (
        <button onClick={buttonClicked}>
            <IoMdAdd className="create"/>
        </button>

    );
    
}