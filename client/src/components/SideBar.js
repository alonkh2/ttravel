import React from "react";
// import {
//     HeartIcon,
//     CalendarIcon,
//     ShareIcon,
//     VideoCameraIcon,
//     CameraIcon,
//     DocumentIcon,
//     InboxIcon,
//     DocumentTextIcon,
//     BookmarkIcon,
//     HomeIcon,
// } from "@heroicons/react/outline";
import {
    HeartIcon as HeartIconFill,
    CalendarIcon as CalendarIconFill,
    ShareIcon as ShareIconFill,
    VideoCameraIcon as VideoCameraIconFill,
    CameraIcon as CameraIconFill,
    DocumentIcon as DocumentIconFill,
    InboxIcon as InboxIconFill,
    DocumentTextIcon as DocumentTextIconFill,
    BookmarkIcon as BookmarkIconFill,
    HomeIcon as HomeIconFill,
} from "@heroicons/react/solid";

function SideBar(props) {
    const defaultProps = {
        all: props.all || 30,
        used: props.used || 15.7,
        ...props,
    };
    const progress = Math.round((defaultProps.used / defaultProps.all) * 100);
    return (
        <div className="flex items-center justify-around flex-col h-full w-64 py-4 px-2 space-y-4 border-r-accent border-r-[1px]">
            <div className="grid grid-cols-2 grid-rows-3 w-full h-60 centered-children text-[0.7rem]">
                <div>
                    <div className="sidebar-icon centered-div">
                        <HomeIconFill className="icon" />
                    </div>
                    Favourites
                </div>
                <div>
                    <div className="sidebar-icon centered-div">
                        <HeartIconFill className="icon" />
                    </div>
                    Favourites
                </div>
                <div>
                    <div className="sidebar-icon centered-div">
                        <ShareIconFill className="icon" />
                    </div>
                    Shared
                </div>
                <div>
                    <div className="sidebar-icon centered-div">
                        <InboxIconFill className="icon" />
                    </div>
                    Request
                </div>
                <div>
                    <div className="sidebar-icon centered-div">
                        <CalendarIconFill className="icon" />
                    </div>
                    Recent
                </div>
                <div>
                    <div className="sidebar-icon centered-div">
                        <BookmarkIconFill className="icon" />
                    </div>
                    Saved
                </div>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 w-full h-40 centered-children text-[0.7rem]">
                <div>
                    <div className="sidebar-icon centered-div">
                        <VideoCameraIconFill className="icon" />
                    </div>
                    Videos
                </div>
                <div>
                    <div className="sidebar-icon centered-div">
                        <CameraIconFill className="icon" />
                    </div>
                    Photos
                </div>
                <div>
                    <div className="sidebar-icon centered-div">
                        <DocumentIconFill className="icon" />
                    </div>
                    Documents
                </div>
                <div>
                    <div className="sidebar-icon centered-div">
                        <DocumentTextIconFill className="icon" />
                    </div>
                    Signed
                </div>
            </div>

            <div className="centered-div text-left flex-col w-full p-2">
                <h2 className="w-[80%] mb-1">
                    {defaultProps.used + " GB used"}
                </h2>
                <p className="w-[80%] mb-4 text-xs">
                    {progress +
                        "% used - " +
                        (defaultProps.all - defaultProps.used) +
                        " GB free"}
                </p>
                <div className="w-[80%] h-2 relative">
                    <div
                        className="h-full bg-[#FF6E91] rounded-lg"
                        style={{ width: progress + "%" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default SideBar;
