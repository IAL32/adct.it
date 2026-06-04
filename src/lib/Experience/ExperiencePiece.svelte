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
		<b>{position}</b> &mdash; <span class="when">{company}</span>
	</Col>
{:else}
	<Col xs="12" class={class_}>
		<span class="float-right when">{company}</span>
		<h2>
			<img class="brand-logo" {alt} src={`img/${logo}`} />
			{position}
		</h2>
		<slot />
	</Col>
{/if}
