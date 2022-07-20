<script lang="ts">
	import { cameraPosition } from "$lib/stores";
	import { onMount } from "svelte";
	import * as SC from "svelte-cubed";
	import { tweened } from "svelte/motion";
	import * as THREE from "three";
	import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

	let loaded = false;
	let loadingVal: number;
	let data: any;
	onMount(() => {
		cameraPosition.set([12, 6, 2]);
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
				loadingVal = (xhr.loaded / xhr.total) * 100;
				console.log(loadingVal + "% loaded");
			}
		);
	});
</script>

{#if loaded}
	<SC.Primitive
		object={data}
		position={[0, 0, 0]}
		rotation={[0, 0, 0]}
		scale={[1, 1, 1]}
	/>

	<SC.DirectionalLight
		color={new THREE.Color(0xffffff)}
		position={[0, 10, 10]}
		intensity={0.75}
		shadow={false}
	/>
	<SC.AmbientLight color={new THREE.Color(0xffffff)} intensity={0.75} />
{:else}
	{#if loadingVal}
		<h1>{tweened(loadingVal, {})}%</h1>
	{/if}
	<h2>Loading ...</h2>
{/if}
