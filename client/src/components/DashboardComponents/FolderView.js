import React from "react";
import Folder from "./Folder";
import ScrollContainer from "react-indiana-drag-scroll";

const folder_names = [
    "folder",
    "documents",
    "photos",
    "music",
    "videos",
    "downloads",
    "desktop",
    "pictures",
    "public",
    "games",
    "programs",
    "art",
    "trips",
    "work",
    "projects",
    "school",
];

const colors = [
    "#3734A9",
    "#2FE6C8",
    "#FFCD00",
    "#FF6D00",
    "#FF00A8",
    "#FF00A8",
];

function FolderView() {
    const folders = folder_names.map((folder_name, index) => {
        return (
            <Folder
                key={index}
                name={folder_name}
                color={colors[index % (colors.length - 1)]}
                numberOfFiles={Math.floor(Math.random() * 100)}
                size={Math.floor(Math.random() * 100)}
            />
        );
    });
    return (
        <div className="relative w-full h-48 mt-4">
            <div
                style={{ cursor: "grab" }}
                className="w-full h-full mt-2 overflow-x-scroll scrollbar-hide flex"
            >
                <ScrollContainer className="flex">
                    <div className="min-w-[2.5rem]" />
                    <div className="flex space-x-4">{folders}</div>
                </ScrollContainer>
            </div>
        </div>
    );
}

export default FolderView;
