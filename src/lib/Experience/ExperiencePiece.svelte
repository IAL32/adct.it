<script>
	import { Col } from '@sveltestrap/sveltestrap';

	export let position;
	export let logo;
	export let alt;
	export let company;
	export let when;
	export let print = true;
	export let compact = false;

	const class_ = print ? '' : 'd-print-none';
</script>

{#if compact}
	<Col xs="12" class={`compact-role ${class_}`}>
		<img class="brand-logo" {alt} src={`img/${logo}`} />
		<b>{position}</b> <span class="company">@ {company}</span>
		<span class="when">{when}</span>
	</Col>
{:else}
	<Col xs="12" class={`experience-piece ${class_}`}>
		<div class="role-header">
			<h3 class="role-title">
				<img class="brand-logo" {alt} src={`img/${logo}`} />
				<span>{position}</span>
				<span class="company">@ {company}</span>
			</h3>
			<span class="when">{when}</span>
		</div>
		<slot />
	</Col>
{/if}
