import Indicators from "./Indicators";
import Launch from "./Launch";
import Map from "./map";
import VideoFeed from "./videofeed";

export default function Home() {
    return (
        <div className="w-[100vw] h-[100vh] grid-cols-2 grid">
            <div className="w-full h-[100vh]">
                <div className="h-[75%] p-4">
                    <Map />
                </div>
                <div className="h-[25%]">
                    <Indicators />
                </div>
            </div>
            <div className="w-full h-[100vh]">
                <div className="h-[20%] w-full mb-4">
                    <Launch />
                </div>
                <div className="h-[78%]">
                    <VideoFeed />
                </div>
            </div>
        </div>
    );
}
