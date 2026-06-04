<script lang="ts">
	import { Icon } from '@sveltestrap/sveltestrap';

	export let href;
</script>

<a {href} target="_blank">
	<Icon name="link-45deg" />
	<slot />
</a>
