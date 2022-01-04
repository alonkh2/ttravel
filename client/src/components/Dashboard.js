import React from "react";
import FileManager from "./DashboardComponents/FileManager";
import FolderView from "./DashboardComponents/FolderView";
import QuickAccess from "./DashboardComponents/QuickAccess";
import RecentlyUploaded from "./DashboardComponents/RecentlyUploaded";

function Dashboard() {
    return (
        <div className="relative w-full h-full grid grid-cols-2 pr-2 pb-8 2xl:grid-cols-3">
            <div className="col-span-2 flex flex-col items-center justify-between overflow-y-scroll scrollbar-hide">
                <FolderView />
                <QuickAccess />
                <div className="flex justify-start space-x-24 w-full pl-10">
                    <div className="w-60 sm:w-96 md:w-60 xl:w-96">
                        <RecentlyUploaded />
                    </div>
                    <div className="hidden md:inline w-96">
                        <FileManager />
                    </div>
                </div>
            </div>
            <div className="hidden xl:inline">hello world</div>
        </div>
    );
}

export default Dashboard;
