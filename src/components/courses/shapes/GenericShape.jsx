import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from "three";

import ShapeType from './ShapeType';
import getTexture from './getTexture';

const GenericShape = ( {type, dimension} ) => {

    const MyMesh = () => {

        const mesh = React.useRef();
        const [active, setActive] = React.useState(false);
        useFrame(() => {
            mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
        });
        var image = getTexture(type);

        const texture = React.useMemo(() => new THREE.TextureLoader().load(image), []);
        console.log(dimension)

        return (
                <mesh 
                    ref={mesh}
                    scale={active ? [2, 2, 2] : [1, 1, 1]}
                    onClick={(e) => setActive(!active)}
                    position={[0, 0, 0]} >
                    {
                        type === ShapeType.CUBE ? 
                            <boxBufferGeometry attach="geometry" args={[dimension, dimension, dimension]} />
                                : type === ShapeType.SPHERE ? 
                                    <sphereBufferGeometry attach="geometry" args={[dimension]} />
                                        : ''
                    }
                    
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

export default GenericShape;