<script>
	import { Col } from '@sveltestrap/sveltestrap';

	export let position;
	export let logo;
	export let alt;
	export let company;
	export let print = true;
	export let compact = false;

	const class_ = print ? '' : 'd-print-none';
</script>

{#if compact}
	<Col xs="12" class={`compact-role ${class_}`}>
		<img class="brand-logo" {alt} src={`img/${logo}`} />
		<b>{position}</b> - <span class="when">{company}</span>
	</Col>
{:else}
	<Col xs="12" class={class_}>
		<div class="role-header">
			<h3 class="role-title">
				<img class="brand-logo" {alt} src={`img/${logo}`} />
				<span>{position}</span>
			</h3>
			<span class="when">{company}</span>
		</div>
		<slot />
	</Col>
{/if}
