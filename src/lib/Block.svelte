<script>
	import { Col, Row } from 'sveltestrap';

	export let title;
	export let avoidBreak = false;
	export let print = true;

	const class_ = (print ? '' : 'd-print-none') + '' + (avoidBreak ? 'print-avoid-break' : '');
</script>

<Row class={class_}>
	<Col xs="12" md="2" class="part-content-title">{title}</Col>
	<Col xs="12" md="10" class="part-content">
		<Row>
			<slot />
		</Row>
	</Col>
</Row>
