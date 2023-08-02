import {
    Airspeed,
    Altimeter,
    AttitudeIndicator,
    HeadingIndicator,
    TurnCoordinator,
    Variometer,
} from "../components/indicators";

export default function Indicators() {
    return (
        <div className="flex flex-row w-full h-full items-end mb-8">
            <hr />

            <Altimeter altitude={Math.random() * 28000} showBox={true} />

            <hr />

            <AttitudeIndicator
                roll={(Math.random() - 0.5) * 120}
                pitch={(Math.random() - 0.5) * 40}
                showBox={true}
            />

            <hr />

            <Airspeed airspeed={(Math.random() - 0.5) * 160} showBox={true} />

            <hr />

            <Variometer vario={(Math.random() - 0.5) * 4000} showBox={true} />
        </div>
    );
}
