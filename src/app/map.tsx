"use client";
import { useEffect, useState } from "react";
import {
    MapContainer,
    TileLayer,
    LayerGroup,
    Marker,
    Polyline,
    MapContainerProps,
    Tooltip,
} from "react-leaflet";

export default function Map() {
    const [center, setCenter] = useState<number[]>();
    useEffect(() => {
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    setCenter([
                        position.coords.latitude,
                        position.coords.longitude,
                    ]);
                });
            }
        }

        getLocation();
    }, []);
    return (
        <div className="relative w-full h-full">
            {center && (
                <MapContainer
                    center={center as any}
                    zoom={13}
                    style={{ height: "100%" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LayerGroup>
                        <Marker position={center}>
                            <Tooltip>Launch Computer Position</Tooltip>
                        </Marker>
                    </LayerGroup>
                </MapContainer>
            )}
        </div>
    );
}
