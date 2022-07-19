<script>
	import * as SC from "svelte-cubed";
	import * as THREE from "three";
</script>

<SC.Canvas>
	<SC.PerspectiveCamera position={[1, 1, 3]} />
	<SC.Mesh geometry={new THREE.BoxGeometry()} />

	<SC.OrbitControls enableZoom={false} />
</SC.Canvas>
