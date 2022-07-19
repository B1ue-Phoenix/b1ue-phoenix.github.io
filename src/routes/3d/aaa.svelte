<script lang="ts">
	import * as THREE from "three";
	import * as SC from "svelte-cubed";
	import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
	import { onMount } from "svelte";

	let gltfModels: any = null;

	function loadAllGLTF() {
		const loader = new GLTFLoader();
		Promise.all([
			loader.loadAsync(
				"https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/models/gltf/Flamingo.glb"
			),
		]).then((modelList) => (gltfModels = modelList));
	}

	onMount(() => {
		loadAllGLTF();
	});
</script>

<!-- TEMPLATE -->

<SC.Canvas
	background={new THREE.Color(0x36363f)}
	shadows={true}
	antialias={true}
	physicallyCorrectLights={false}
>
	<SC.PerspectiveCamera position={[1, 3, 8]} near={0.1} far={400} fov={55} />

	<SC.OrbitControls
		enabled={true}
		enableZoom={true}
		autoRotate={false}
		autoRotateSpeed={2}
		enableDamping={true}
		dampingFactor={0.1}
	/>

	<SC.DirectionalLight
		color={new THREE.Color(0xffffff)}
		position={[0, 10, 10]}
		intensity={0.75}
		shadow={false}
	/>
	<SC.AmbientLight color={new THREE.Color(0xffffff)} intensity={0.75} />

	<SC.Mesh
		geometry={new THREE.BoxBufferGeometry()}
		material={new THREE.MeshStandardMaterial({
			color: new THREE.Color(0xff3e02),
			wireframe: false,
			metalness: 0,
			roughness: 1,
		})}
		position={[-4, -3, -7]}
		rotation={[0, 0, 0]}
		scale={[1, 1, 1]}
		castShadow={false}
		receiveShadow={false}
	/>

	<SC.Mesh
		geometry={new THREE.CylinderBufferGeometry()}
		material={new THREE.MeshStandardMaterial({
			color: new THREE.Color(0xff3e02),
			wireframe: false,
			metalness: 0,
			roughness: 1,
		})}
		position={[-3, -3, -9]}
		rotation={[0, 0, 0]}
		scale={[1, 1, 1]}
		castShadow={false}
		receiveShadow={false}
	/>

	<SC.Mesh
		geometry={new THREE.SphereBufferGeometry()}
		material={new THREE.MeshStandardMaterial({
			color: new THREE.Color(0xff3e02),
			wireframe: false,
			metalness: 0,
			roughness: 1,
		})}
		position={[0, 4, -6]}
		rotation={[0, 0, 0]}
		scale={[1, 1, 1]}
		castShadow={false}
		receiveShadow={false}
	/>

	{#if gltfModels}
		<SC.Primitive
			object={gltfModels[0].scene}
			position={[0, 0, 0]}
			rotation={[0, 0, 0]}
			scale={[1, 1, 1]}
		/>
	{/if}
</SC.Canvas>
