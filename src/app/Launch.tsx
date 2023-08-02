"use client";
import { useState } from "react";

let r = 60;

export default function Launch() {
    const [softwareArmed, setSoftwareArmed] = useState(false);
    return (
        <div className="p-2 h-full w-full min-h-[193px]">
            <div className="p-2 bg-neutral-900 h-full border border-neutral-800 rounded-md flex flex-row w-full items-center ">
                <div className="flex flex-col h-full">
                    <h1 className="text-[25px] flex-grow whitespace-nowrap">
                        Launch Control
                    </h1>
                    <div className="grid grid-cols-3 mb-4">
                        <div className="flex items-center justify-center flex-col">
                            <h1>Cont-1</h1>
                            <div className="bg-red-600 h-[35px] w-[35px] rounded-full  border-red-400 border-[2px]" />
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <h1>Cont-2</h1>
                            <div className="bg-red-600 h-[35px] w-[35px] rounded-full  border-red-400 border-[2px]" />
                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <h1>Armed</h1>
                            <div className="bg-red-600 h-[35px] w-[35px] rounded-full  border-red-400 border-[2px]" />
                        </div>
                    </div>
                </div>
                <div className="flex-grow max-w-[200px]" />
                <div className="grid grid-cols-3 ml-4 space-x-4">
                    <div className="flex items-center flex-col">
                        <h1 className="w-full text-center text-[20px]">
                            Arm Ignition
                        </h1>
                        <div
                            id="rotary-container-"
                            className="rotary-container cursor-pointer"
                            style={{
                                width: r * 2 + "px",
                                height: r * 2 + "px",
                            }}
                            onClick={() => setSoftwareArmed(!softwareArmed)}
                        >
                            <div
                                id="rotary-container-"
                                className="rotary-switch"
                                style={{
                                    transform: `rotate(${
                                        softwareArmed ? 90 : 0
                                    }deg)`,
                                }}
                            >
                                <div className="arrow-up"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center flex-col">
                        <h1 className="w-full text-center text-[20px]">
                            Launch 1
                        </h1>
                        <div className="w-[120px] h-[120px] flex items-center justify-center bg-red-700 border-red-500 border-[2px]">
                            <h1 className="text-[30px]">FIRE!</h1>
                        </div>
                    </div>
                    <div className="flex items-center flex-col">
                        <h1 className="w-full text-center text-[20px]">
                            Launch 2
                        </h1>
                        <div className="w-[120px] h-[120px] flex items-center justify-center bg-red-700 border-red-500 border-[2px]">
                            <h1 className="text-[30px]">FIRE!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
