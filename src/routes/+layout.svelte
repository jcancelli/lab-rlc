<script lang="ts">
	import "../app.css"
	import { page } from "$app/stores"
	import { base } from "$app/paths"
</script>

<nav class="py-3 px-5 flex gap-4 font-semibold bg-cyan-700 text-gray-200">
	<a href="{base}/runs" class:underline={$page.url.pathname.endsWith("/runs")}> Runs </a>
	<a href="{base}/components" class:underline={$page.url.pathname.endsWith("/components")}>
		Components
	</a>
</nav>
<main>
	<slot />
</main>
