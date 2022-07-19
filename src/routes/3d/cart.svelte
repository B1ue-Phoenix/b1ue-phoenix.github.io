<script lang="ts">
	import { onMount } from "svelte";

	import * as SC from "svelte-cubed";
	import * as THREE from "three";
	import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

	let loaded = false;
	let data: any;
	onMount(() => {
		const loader = new GLTFLoader();
		loader.load(
			"/3d/ramen_cart.gltf",
			(gltf) => {
				data = gltf.scene;
				console.log("loaded");
				loaded = true;
				console.dir(data);
			},
			(xhr) => {
				console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
			}
		);
	});
</script>

{#if loaded}
	<SC.Canvas background={new THREE.Color(0x36363f)}>
		<SC.Primitive
			object={data}
			position={[0, 0, 0]}
			rotation={[0, 0, 0]}
			scale={[1, 1, 1]}
		/>
		<SC.PerspectiveCamera position={[2, 20, 2]} />

		<SC.DirectionalLight
			color={new THREE.Color(0xffffff)}
			position={[0, 10, 10]}
			intensity={0.75}
			shadow={false}
		/>
		<SC.AmbientLight color={new THREE.Color(0xffffff)} intensity={0.75} />

		<SC.OrbitControls enableZoom={false} />
	</SC.Canvas>
{:else}
	<h1>Loading ...</h1>
{/if}
