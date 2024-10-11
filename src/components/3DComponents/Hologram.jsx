import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import './SkiLLIntro.css';

function Model() {
	const modelRef = useRef();

	// Charger le modèle glTF
	const { scene, animations } = useGLTF('3x3_cube_solve.glb');

	// Utilisez les animations extraites du modèle
	const { actions } = useAnimations(animations, modelRef);

	// Démarrer automatiquement la première animation lorsque le modèle est chargé

	useEffect(() => {
		if (actions) {
			const firstAnimation = Object.keys(actions)[0];
			if (firstAnimation) {
				actions[firstAnimation].play();
			} else {
				console.log("Aucune animation");
			}
		}
	}, [actions])

	// Rotation automatique
	useFrame(() => {
		if (actions && actions['AnimationName']) {
			actions['AnimationName'].play();
		}
	});

	// Retourne le modèle 3D dans la scène
	return (
		<primitive 
			ref={modelRef}
			object={scene} 
			scale={[0.25, 0.25, 0.25]} 
			position={[0, -5, 0]}
		/>
	);
}

function Loader() {
	return (
		<Html center>
			<div 
				className="f-object" 
				style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'white', fontSize: '22px', fontWeight: 'bold' }}
			>
				<div className="spinner"></div>
				<p>Charger l'objet 3D ...</p>
			</div>
		</Html>
	);
}

const Hologram = () => {
	return (
		<div className="zindex-a">
			<Canvas camera={{ position: [0, 0, 25], fov: 75 }}>
				<color attach="background" args={['#022253']} />

				<ambientLight intensity={0.5} />
				<directionalLight position={[10, 10, 5]} intensity={1} />
				<pointLight position={[10, 10, 10]} />

				<Suspense fallback={<Loader />}>
					<Model position={[2, 0 ,0]} />
				</Suspense>

				<OrbitControls 
					enablePan={false} 
					enableZoom={false}
				/>
			</Canvas>
		</div>
	)
}

export default Hologram;