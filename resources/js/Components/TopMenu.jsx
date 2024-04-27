import { IoMdAdd, IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import React from 'react';
import CreatePostButton from "@/Components/CreatePostButton"; 
import '../../css/TopMenu.css';
import { useForm } from '@inertiajs/react';

export default function TopMenu(){
    const { post } = useForm({});

    const logout = () => {
        post(route('logout'));
    }

    return (
        <div className="topRow">
            <div className="searchBar">
                <IoMdSearch className="icon"></IoMdSearch>
                <input type="text" placeholder="Search" />
            </div>


            <div className="rightButtons">
                <CgProfile onClick={logout} className="profile"/>
                <CreatePostButton/>
            </div>
        </div>  
    );
}
