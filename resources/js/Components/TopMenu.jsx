import { IoMdAdd, IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import React from 'react';
import '../../css/TopMenu.css';
import { useForm } from '@inertiajs/react';
import Input from "./core/Input";

export default function TopMenu(){
    const { post } = useForm({});

    const logout = () => {
        post(route('logout'));
    }

    return (
        <div className="topRow">
            <div className="leftButtons">
                <h1 className="logo" onClick= {() => window.location.replace("/")}>
                    Deadit
                </h1>

            </div>

            <div className="searchBar">
                <Input
                    type="text"
                    placeholder="Search"
                    Icon={IoMdSearch}
                />
            </div>


            <div className="rightButtons">
                <CgProfile onClick={logout} className="rightButtonIcon"/>
                <IoMdAdd onClick={() => window.location.replace("/create")} className="rightButtonIcon"/>
            </div>
        </div>  
    );
}
