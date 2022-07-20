<script>
	import { locale, t } from "$lib/i18n";
</script>

<div>
	<h1>
		<a
			href="/"
			on:click={(e) => {
				e.preventDefault();
				locale.set("ko");
			}}
		>
			리</a
		>
	</h1>
	<h1>
		<a
			href="/"
			on:click={() => {
				locale.set("en");
			}}
		>
			Lee</a
		>
	</h1>
</div>
<ul>
	<li>
		<a href="/3d/"> 3d </a>
	</li>
</ul>

<p>
	{$t("l.index.text", { default: "aaa" })}
</p>

<style>
	div {
		text-align: center;
	}
</style>
