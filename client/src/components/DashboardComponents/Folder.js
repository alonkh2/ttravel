import { FolderIcon } from "@heroicons/react/solid";
import React from "react";

function Folder(props) {
    const defaultProps = {
        color: props.color || "#2FE6C8",
        name: props.name || "folder",
        numberOfFiles: props.numberOfFiles || 12,
        size: props.size || 2,
        ...props,
    };
    return (
        <div>
            <div
                className="h-40 w-40 px-4 py-2 text-left space-y-4 rounded-lg relative"
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
                <h2>{defaultProps.name}</h2>
                <div className="flex items-center justify-between text-xs">
                    <p>{defaultProps.numberOfFiles} files</p>
                    <p>{defaultProps.size} GB</p>
                </div>
            </div>
        </div>
    );
}

export default Folder;
