import React from "react";
import Folder from "./Folder";
import ScrollContainer from "react-indiana-drag-scroll";

const colors = [
    "#3734A9",
    "#2FE6C8",
    "#FFCD00",
    "#FF6D00",
    "#FF00A8",
    "#FF00A8",
];

function FolderView() {
    const folders = [];
    for (let i = 0; i < 15; i++) {
        folders.push(
            <Folder color={colors[i % (colors.length - 1)]} key={i} />
        );
    }
    return (
        <div className="relative w-full h-48 mt-4">
            <div
                style={{ cursor: "grab" }}
                className="w-full h-full mt-2 overflow-x-scroll scrollbar-hide flex"
            >
                <ScrollContainer className="scroll-container">
                    <div className="flex space-x-4">{folders}</div>
                </ScrollContainer>
            </div>
        </div>
    );
}

export default FolderView;
