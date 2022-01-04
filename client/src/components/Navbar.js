import React, { useState } from "react";
import {
    BellIcon,
    ChevronDownIcon,
    SearchIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function Navbar(props) {
    const defaultProps = {
        name: props.name || "John Doe",
        email: props.email || "JohnDoe@gmail.com",
        img: props.img || "https://www.w3schools.com/howto/img_avatar.png",
        ...props,
    };
    const [search, setSearch] = useState("");
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center w-full h-24 py-4 shadow-lg">
            <Link to="/">
                <div className="hidden lg:flex justify-start px-12 items-center space-x-4 cursor-pointer">
                    <div className="centered-div rounded-full bg-primary w-8 h-8 text-[#FFFFFF]">
                        M
                    </div>
                    <div className="text-primary font-semibold">MY CLOUD</div>
                </div>
            </Link>
            <div className="col-span-2 centered-div space-x-4">
                <div className="flex items-center justify-start text-left space-x-2 border-[1px] w-96 border-[#F0F0F0] py-3 px-4 rounded-lg">
                    <SearchIcon className="h-6 w-6" />
                    <input
                        type="text"
                        className="text-secondary border-none outline-none text-sm w-full"
                        placeholder="Search Files..."
                        maxLength={44}
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                </div>
                <div className="flex items-center justify-between text-left border-[1px] border-[#F0F0F0] py-3 px-4 rounded-lg w-48">
                    <p>Filter</p>
                    <ChevronDownIcon className="h-4 w-4" />
                </div>
            </div>
            <div className="justify-center items-center space-x-4 hidden lg:flex">
                <BellIcon className="h-6 w-6 text-purple-900 cursor-pointer" />
                <Link to="/login">
                    <div className="centered-div space-x-2 cursor-pointer">
                        <img
                            src={defaultProps.img}
                            className="rounded-full h-10 aspect-square"
                            alt="profile"
                        />
                        <div className="text-left">
                            <p className="font-normal">{defaultProps.name}</p>
                            <p className="text-xs text-secondary">
                                {defaultProps.email}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
