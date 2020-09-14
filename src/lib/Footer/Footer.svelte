<script lang="ts">
	import ExtLink from '$lib/ExtLink.svelte';
	import { Col, Container, Row } from 'sveltestrap';
</script>

<footer class="text-muted">
	<Container>
		<Row>
			<Col>Thanks for taking a look!</Col>
			<Col class="d-print-none">
				<div class="float-right">
					<ExtLink href="https://github.com/IAL32/adct.it">Source code</ExtLink>
				</div>
			</Col>
		</Row>
	</Container>
</footer>
