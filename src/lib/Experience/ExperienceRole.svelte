<script>
	export let position;
	export let when;
</script>

<li class="timeline-role">
	<div class="timeline-role-header">
		<span class="timeline-role-title">{position}</span>
		<span class="when">{when}</span>
	</div>
	<slot />
</li>
