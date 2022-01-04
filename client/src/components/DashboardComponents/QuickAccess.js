import { PhotographIcon, PlayIcon, DocumentIcon } from "@heroicons/react/solid";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

function QuickAccess() {
    const files = [
        { name: "alonina", extension: "jpeg", logo: "photo" },
        { name: "ninalon", extension: "pdf", logo: "document" },
        { name: "loninoni", extension: "mp4", logo: "video" },
        { name: "alonina", extension: "jpeg", logo: "photo" },
        { name: "ninalon", extension: "pdf", logo: "document" },
        { name: "loninoni", extension: "mp4", logo: "video" },
        { name: "alonina", extension: "jpeg", logo: "photo" },
        { name: "ninalon", extension: "pdf", logo: "document" },
        { name: "loninoni", extension: "mp4", logo: "video" },
    ];

    const fileComponents = files.map((file, index) => {
        return (
            <File
                name={file.name}
                extension={file.extension}
                logo={file.logo}
                key={index}
            />
        );
    });
    return (
        <div className="w-full">
            <h2 className="text-left text-secondary text-lg ml-10 font-semibold">
                Recently Uploaded
            </h2>
            <div
                style={{ cursor: "grab" }}
                className="w-full mt-2 overflow-x-scroll scrollbar-hide flex"
            >
                <ScrollContainer className="flex">
                    <div className="min-w-[2.5rem]" />
                    <div className="flex space-x-3">{fileComponents}</div>
                </ScrollContainer>
            </div>
        </div>
    );
}

const icons = {
    document: DocumentIcon,
    photo: PhotographIcon,
    video: PlayIcon,
};

const colors = {
    document: "#3246D3",
    photo: "#21A345",
    video: "#FF4975",
};

const File = (props) => {
    console.log(props);
    const defaultProps = {
        name: props.name || "file",
        extension: props.extension || "pdf",
        logo: props.logo || "document",
        url: props.url || "https://via.placeholder.com/150",
        ...props,
    };
    const Icon = icons[defaultProps.logo];
    return (
        <div className="h-44 w-52 bg-[#F5F5F5] rounded-2xl flex flex-col">
            <div className="h-32 overflow-hidden rounded-t-2xl">
                <img src={defaultProps.url} alt="file" className="w-full" />
            </div>
            <div className="flex items-center justify-center w-52 h-12 p-4">
                <Icon
                    className="h-8 aspect-square mr-3"
                    style={{ color: colors[defaultProps.logo] }}
                />
                <p className="text-ellipsis">{defaultProps.name}</p>
                <p className="text-secondary text-xs">
                    {"." + defaultProps.extension}
                </p>
            </div>
        </div>
    );
};

export default QuickAccess;
