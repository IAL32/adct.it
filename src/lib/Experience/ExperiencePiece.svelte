<script>
	import { Col } from 'sveltestrap';

	export let position;
	export let logo;
	export let alt;
	export let company;
</script>

<Col xs="12">
	<span class="float-right when">{company}</span>
	<h2>
		<img class="brand-logo" {alt} src={`img/${logo}`} />
		{position}
	</h2>
  <slot />
</Col>
