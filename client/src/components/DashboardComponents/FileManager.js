import {
    DocumentIcon,
    DotsHorizontalIcon,
    FolderIcon,
} from "@heroicons/react/solid";
import React from "react";

const files = [
    { name: "alonina", date: "2020-01-01", type: "folder" },
    { name: "ninalon", date: "2020-01-02", type: "file" },
    { name: "loninoni", date: "2020-01-31", type: "file" },
    { name: "alonina", date: "2020-01-05", type: "folder" },
];

function FileManager() {
    const fileComponents = files.map((file, index) => {
        return (
            <div className="flex items-center justify-center" key={index}>
                <File name={file.name} date={file.date} type={file.type} />
            </div>
        );
    });
    return (
        <div className="h-full flex flex-col items-center justify-center relative">
            <DotsHorizontalIcon className="icon absolute top-1 right-4 cursor-pointer" />
            <h2 className="text-secondary text-lg w-full pl-3 text-left font-semibold">
                File Manager
            </h2>
            <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
                {fileComponents}
            </div>
            <div className="bg-[#DEE1E6] text-center w-[95%] py-1 rounded-lg cursor-pointer">
                Open File Manager
            </div>
        </div>
    );
}

const icons = {
    file: DocumentIcon,
    folder: FolderIcon,
};

const File = (props) => {
    const defaultProps = {
        name: props.name || "file",
        date: props.date || "2020-01-01",
        type: props.type || "file",
    };

    const Icon = icons[defaultProps.type];
    return (
        <div className="h-28 w-[10.5rem] bg-[#EBEDFB] rounded-lg text-left px-3 py-2 cursor-pointer space-y-1">
            <Icon className="h-8 aspect-square -ml-2" />
            <h2>{defaultProps.name}</h2>
            <p className="text-xs text-[#757575]">
                Created {defaultProps.date}
            </p>
        </div>
    );
};

export default FileManager;
