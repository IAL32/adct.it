<script>
	import { Col } from '@sveltestrap/sveltestrap';

	export let location;
	export let logo;
	export let alt;
	export let degree;
	export let name;
</script>

<Col xs="12" md="6">
	<p class="education-entry">
		<img class="brand-logo" {alt} src={`img/${logo}`} />
		{degree} @ {name}, <span class="education-dates">{location}</span>
	</p>
</Col>
