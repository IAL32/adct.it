<script lang="ts">
	import { Icon } from '@sveltestrap/sveltestrap';

	export let href;
</script>

<a {href} target="_blank" rel="noopener noreferrer">
	<Icon name="link-45deg" aria-hidden="true" />
	<slot />
</a>
