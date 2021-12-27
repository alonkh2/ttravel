import { FolderIcon } from "@heroicons/react/solid";
import React from "react";

function Folder(props) {
    const defaultProps = {
        color: props.color || "#2FE6C8",
        name: props.name || "folder",
        numberOfFiles: props.numberOfFiles || 15,
        size: props.size || 2,
        ...props,
    };
    return (
        <div
            className="h-36 w-40 px-4 pt-2 text-left space-y-4 rounded-lg relative"
            style={{
                backgroundColor: defaultProps.color + "10",
            }}
        >
            <div
                className="w-full h-1 left-0 absolute bottom-[1px] -z-10"
                style={{
                    boxShadow: "5px 15px 18px " + defaultProps.color,
                    transform: "scale(.9)",
                }}
            />
            <FolderIcon
                className="h-12 aspect-square mb-2"
                color={defaultProps.color}
            />
            <h2>Folder Name</h2>
            <div className="flex items-center justify-between text-xs">
                <p>15 files</p>
                <p>size GB</p>
            </div>
        </div>
    );
}

export default Folder;
