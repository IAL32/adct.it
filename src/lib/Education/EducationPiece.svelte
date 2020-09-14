<script>
	import { Col } from 'sveltestrap';

	export let location;
	export let logo;
	export let alt;
	export let degree;
	export let wip = false;
	export let name;
</script>

<Col xs="12">
	<span class="float-right when">{location}</span>
	<h2>
		<img class="brand-logo" {alt} src={`img/${logo}`} />
		{degree}{#if wip}<i>&nbsp;(wip)</i>{/if}
	</h2>
	<p class="mt-3">
		<strong>University:</strong>
		{name}
	</p>
</Col>
