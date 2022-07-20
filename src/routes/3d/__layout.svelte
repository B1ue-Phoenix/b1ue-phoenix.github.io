<script>
	import { t } from "$lib/i18n";
	import { cameraPosition } from "$lib/stores";
	import * as SC from "svelte-cubed";
	import * as THREE from "three";
</script>

<main>
	<div>
		<SC.Canvas background={new THREE.Color(0x36363f)}>
			<SC.PerspectiveCamera position={$cameraPosition} />
			<slot />
			<SC.OrbitControls enableZoom={true} />
		</SC.Canvas>
	</div>
	<nav>
		<ol>
			<li>
				<a href="/3d/box"> {$t("l.3d.box", { default: "Epic" })}</a>
			</li>
			<li>
				<a href="/3d/cart">{$t("l.3d.cart", { default: "Epic" })}</a>
			</li>
		</ol>
	</nav>
</main>

<style lang="scss">
	nav {
		position: absolute;
		left: 0;
		top: 0;
		background-color: white;
		height: 100%;
	}
	ol {
		display: flex;
		margin: 0;
		padding: 0;
		flex-direction: column;
		li {
			padding: 1em;
			border: black 0.1em solid;
			margin: 0;
			list-style: none;
			padding: 1em 5em;
		}
	}
</style>
