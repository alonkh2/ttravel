import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

const files = [
    {
        name: "alonina",
        date: "2020-01-01",
        size: "2MB",
        url: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "ninalon",
        date: "2021-01-01",
        size: "2MB",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWTf1nGSgVM8Oc_drnppk8wmDGZ1uUegROMw&usqp=CAU",
    },
    {
        name: "loninoni",
        date: "2022-01-01",
        size: "2MB",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFeoD7D_idWVYoIOR0HvwAanpi_Rmnx7vI1Q&usqp=CAU",
    },
    {
        name: "alonina",
        date: "2020-01-01",
        size: "2MB",
        url: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "ninalon",
        date: "2021-01-01",
        size: "2MB",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWTf1nGSgVM8Oc_drnppk8wmDGZ1uUegROMw&usqp=CAU",
    },
    {
        name: "loninoni",
        date: "2022-01-01",
        size: "2MB",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFeoD7D_idWVYoIOR0HvwAanpi_Rmnx7vI1Q&usqp=CAU",
    },
    {
        name: "alonina",
        date: "2020-01-01",
        size: "2MB",
        url: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        name: "ninalon",
        date: "2021-01-01",
        size: "2MB",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWTf1nGSgVM8Oc_drnppk8wmDGZ1uUegROMw&usqp=CAU",
    },
    {
        name: "loninoni",
        date: "2022-01-01",
        size: "2MB",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFeoD7D_idWVYoIOR0HvwAanpi_Rmnx7vI1Q&usqp=CAU",
    },
];

function RecentlyUploaded() {
    const fileComponents = files.map((file, index) => {
        return (
            <File
                name={file.name}
                date={file.date}
                size={file.size}
                url={file.url}
                key={index}
            />
        );
    });
    return (
        <div>
            <h2 className="text-left text-secondary text-lg mb-4 font-semibold">
                Recently Uploaded
            </h2>
            <div
                style={{ cursor: "grab" }}
                className="w-full max-h-72 mt-2 overflow-y-scroll scrollbar-hide"
            >
                <ScrollContainer className="max-h-72" horizontal={false}>
                    <div className="space-y-3">{fileComponents}</div>
                </ScrollContainer>
            </div>
        </div>
    );
}

const File = (props) => {
    const defaultProps = {
        name: props.name || "file",
        date: props.date || "2020-01-01",
        size: props.size || "2MB",
        url:
            props.url ||
            "https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg",
        ...props,
    };
    return (
        <div className="relative w-96 h-12 rounded-md flex items-center justify-between">
            <div className="flex items-center h-full">
                <img
                    src={defaultProps.url}
                    alt="preview"
                    className="h-full aspect-square object-cover rounded-lg"
                />
                <div className="text-left h-full w-32 mx-3">
                    <p className="overflow-hidden text-ellipsis">
                        {defaultProps.name}
                    </p>
                    <p className="text-md text-secondary">
                        {defaultProps.date}
                    </p>
                </div>
            </div>
            <p className="mr-2">{defaultProps.size}</p>
        </div>
    );
};

export default RecentlyUploaded;
