<script>
	import { Col } from 'sveltestrap';

	export let location;
	export let logo;
	export let alt;
	export let degree;
	export let name;
</script>

<Col xs="12">
	<!-- <span class="float-right when">{location}</span> -->
	<p>
		<img class="brand-logo" {alt} src={`img/${logo}`} />
		{degree} <i>@</i>
		{name}, {location}
	</p>
</Col>
