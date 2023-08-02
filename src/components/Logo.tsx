import React, { useEffect, useMemo, useRef } from "react";
import { Sparkles, Stars, useGLTF } from "@react-three/drei";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

export function MainLogo() {
    const { nodes, materials } = useGLTF("/logo.glb") as any;
    const group = useRef<Group>();
    const sparkles = useRef<Group>();

    const sizes = useMemo(() => {
        return new Float32Array(
            Array.from({ length: 1000 }, () => Math.random() * 10)
        );
    }, []);

    useFrame(({ clock }) => {
        if (group.current === undefined) return;
        group.current.rotation.y = clock.getElapsedTime() / 2;
    });

    return (
        <group position={[0, 0, 0.5]}>
            <Stars speed={1} count={1500} />
            <group ref={group as any}>
                <group
                    dispose={null}
                    rotation={[Math.PI / 2, 0, 0]}
                    position={[0, -1, 0]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Text.geometry}
                        material={materials["Material.001"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Curve.geometry}
                        material={materials["SVGMat.001"]}
                        position={[0, 0, -1.639]}
                        scale={[206.777, 0.448, 206.777]}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/logo.glb");
