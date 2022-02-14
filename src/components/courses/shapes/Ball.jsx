import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from "three";
import terra from "./assets/terra.jpeg";

const Ball = ( {dimension} ) => {

    const MyMesh = () => {

        const mesh = React.useRef();
        const [active, setActive] = React.useState(false);
        useFrame(() => {
            mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
        });
        const texture = React.useMemo(() => new THREE.TextureLoader().load(terra), []);

        return (
                <mesh 
                    ref={mesh}
                    scale={active ? [1, 1, 1] : [0.5, 0.5, 0.5]}
                    onClick={(e) => setActive(!active)}
                    position={[0, 0, 0]} >
                    <sphereBufferGeometry attach="geometry" args={[dimension]} />
                    <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
                        <primitive attach="map" object={texture} />
                    </meshBasicMaterial>
                </mesh>
        );
    }

    return (
        <Canvas>
            <MyMesh /> 
        </Canvas>
    );  
}

export default Ball;