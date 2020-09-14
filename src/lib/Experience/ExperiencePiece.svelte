<script>
	import { Col } from 'sveltestrap';

	export let position;
	export let logo;
	export let alt;
	export let company;
</script>

<Col xs="12">
	<span class="float-right when">{position}</span>
	<h2>
		<img class="brand-logo" {alt} src={`img/${logo}`} />
		{company}
	</h2>
  <slot />
</Col>
