import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from "three";

import ShapeType from './ShapeType';
import getTexture from './getTexture';

const GenericShape = ( {type, dimensions, staticDim} ) => {

    const MyMesh = () => {

        const mesh = React.useRef();
        const [active, setActive] = React.useState(false);
        useFrame(() => {
            mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
        });
        const texture = React.useMemo(() => new THREE.TextureLoader().load(getTexture(type)), []);

        return (

        <mesh 
            ref={mesh}
            scale={active && !staticDim ? [2, 2, 2] : [1, 1, 1]}
            onClick={(e) => setActive(!active)}
            position={[0, 0, 0]} >
            {
                type === ShapeType.SQUARE ?
                    /* height, width, depth */
                    <boxBufferGeometry attach="geometry" args={[dimensions[0], dimensions[0], 0]} />
                        : type === ShapeType.CUBE ? 
                                /* height, width, depth */
                                <boxBufferGeometry attach="geometry" args={[dimensions[0], dimensions[0], dimensions[0]]} />
                                    : type === ShapeType.CIRCLE ? 
                                        /* radius, nbSegments */
                                        <circleBufferGeometry attach="geometry" args={[dimensions[0], 25]} />
                                        : type === ShapeType.SPHERE ? 
                                            /* radius */
                                            <sphereBufferGeometry attach="geometry" args={[dimensions[0]]} />
                                                : type === ShapeType.CYLINDER ? 
                                                    /* bottomRadius, topRadius, height */
                                                    <cylinderBufferGeometry attach="geometry" args={[dimensions[0], dimensions[0], dimensions[1]]} />
                                                        : type === ShapeType.TRIANGLE ? 
                                                            /* base, height, nbSides */
                                                            <coneBufferGeometry attach="geometry" args={[dimensions[0], dimensions[1], 2]} />
                                                            : type === ShapeType.CONE ? 
                                                                /* base, height, nbSides */
                                                                <coneBufferGeometry attach="geometry" args={[dimensions[0], dimensions[1], 20]} />
                                                                    :  type === ShapeType.PYRAMIDE ? 
                                                                        /* base, height, nbSides */
                                                                        <coneBufferGeometry attach="geometry" args={[dimensions[0], dimensions[1], dimensions[2]]} />
                                                                            : ''
        }                   
            
            <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
                <primitive attach="map"  object={texture}  />
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