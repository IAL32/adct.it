<script>
	import { Col } from '@sveltestrap/sveltestrap';

	export let company;
	export let logo;
	export let alt;
	export let when;
</script>

<Col xs="12" class="experience-piece">
	<div class="role-header">
		<h3 class="role-title">
			<img class="brand-logo" {alt} src={`img/${logo}`} />
			<span>{company}</span>
		</h3>
		<span class="when">{when}</span>
	</div>
	<ol class="role-timeline">
		<slot />
	</ol>
</Col>
