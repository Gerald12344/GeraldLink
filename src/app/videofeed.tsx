"use client";
import { Canvas } from "@react-three/fiber";
import { MainLogo } from "@/components/Logo";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

let launchCam = "http://192.168.1.228:8000/";

let sorted = false;
export default function VideoFeed() {
    const [launchCamDown, setLaunchCamDown] = useState(true);
    const launchRef = useRef<HTMLDivElement>(null);

    const [url, setUrl] = useState<string>("");
    useEffect(() => {
        const interval = setInterval(async () => {
            console.log(sorted);
            try {
                await axios.get(launchCam + "index.html", {
                    timeout: 200,
                });
                if (sorted === false) {
                    sorted = true;
                    setLaunchCamDown(false);
                    setUrl("/next.svg");
                    setTimeout(() => {
                        setUrl(launchCam + "stream.mjpg");
                    }, 1000);
                }
            } catch (e) {
                sorted = false;
                setUrl("");

                setLaunchCamDown(true);
            }
        }, 500);

        return () => clearInterval(interval);
    });
    return (
        <div className="flex flex-col w-full h-full items-end mb-8 pr-[10px]">
            <div className="aspect-video bg-black w-full border-white border relative">
                <NoSignal />
                <div className="absolute bottom-0">
                    <h1 className="text-white text-[20px] ml-2">
                        Onboard Camera
                    </h1>
                </div>
            </div>
            <div className="aspect-video bg-black w-full border-white border relative border-t-0">
                {launchCamDown && <NoSignal />}
                <div style={{ display: launchCamDown ? "none" : "block" }}>
                    <img src={url} />
                </div>

                <div className="absolute bottom-0">
                    <h1 className="text-white text-[20px] ml-2">
                        Launchpad Camera
                    </h1>
                </div>
            </div>
        </div>
    );
}

function NoSignal() {
    return (
        <div className="top-0 absolute w-full h-full" style={{ zIndex: 10 }}>
            <Canvas>
                <ambientLight intensity={0.3} />
                <pointLight position={[10, 10, 10]} intensity={0.5} />

                <MainLogo />
            </Canvas>
            <div
                className="z-20 absolute left-[50%] margin-auto top-[80%] translate-x-[-50%] text-white 
        "
            >
                <h1 className="text-[40px]">
                    <strong>NO SIGNAL</strong>
                </h1>
            </div>
        </div>
    );
}
