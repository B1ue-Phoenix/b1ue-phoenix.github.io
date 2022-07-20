<script>
	import { cameraPosition } from "$lib/stores";
	import { onMount } from "svelte";
	import * as SC from "svelte-cubed";
	import * as THREE from "three";

	onMount(() => {
		cameraPosition.set([1, 1, 2]);
	});
</script>

<SC.Mesh geometry={new THREE.BoxGeometry()} />
