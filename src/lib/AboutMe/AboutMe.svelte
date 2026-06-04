<script>
	import { Col, Icon, Row } from '@sveltestrap/sveltestrap';
	import EducationPiece from '$lib/Education/EducationPiece.svelte';
</script>

<!-- Mobile-only header: small avatar inline with the name -->
<div class="d-md-none mobile-header mt-4">
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<img
		src="img/profile_picture.png"
		alt="Photo of Adrian Castro"
		class="mobile-avatar" />
	<div class="mobile-header-text">
		<h1>Adrian Castro</h1>
		<small>
			Based in M&uuml;nchen, Germany | Italian (C2), Spanish (C2), English (C1), German (B1),
			French (A2), Portuguese (A2)
		</small>
	</div>
</div>

<Row class="d-flex align-items-start">
	<Col xs="12" md>
		<!-- Desktop-only name + languages (mobile uses .mobile-header above) -->
		<div class="d-none d-md-block mt-5 full-name">
			<h1>Adrian Castro</h1>

			<small>
				Based in M&uuml;nchen, Germany | Italian (C2), Spanish (C2), English (C1), German (B1),
				French (A2), Portuguese (A2)
			</small>
		</div>

		<Row class="mt-3" id="education">
			<EducationPiece
				location="2019–22"
				alt="TUM Logo"
				degree="M.Sc. Data Engineering"
				logo="icon-tum.png"
				name="TUM" />
			<EducationPiece
				location="2016–19"
				alt="UniMiB Logo"
				logo="icon-unimib.png"
				degree="B.Sc. Computer Science"
				name="UniMiB" />
		</Row>
	</Col>
	<Col md="auto" class="pic d-none d-md-block">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src="img/profile_picture.png" alt="Photo of Adrian Castro" style="width: 150px" />
		<p>
			<img src="img/icon-github.png" alt="GitHub Link" class="social-logo" />
			<a href="https://github.com/IAL32" target="_blank">IAL32</a>
		</p>
		<p>
			<img src="img/icon-linkedin.png" alt="LinkedIn Link" class="social-logo" />
			<a href="https://www.linkedin.com/in/adriandcastrot/" target="_blank"> adriandcastrot </a>
		</p>
		<p>
			<img src="img/icon-xing.png" alt="Xin Link" class="social-logo" />
			<a href="https://www.xing.com/profile/Adrian_Castro11/" target="_blank"> Adrian_Castro11 </a>
		</p>
		<p>
			<Icon name="envelope" />
			<a class="email" href="mailto:me@adct.it">me@adct.it</a>
		</p>
		<p>
			<span class="d-none d-print-block">
				<a href="https://adct.it">
					<Icon name="link-45deg" />
					Website
				</a>
			</span>
		</p>
		<p>
			<span class="d-print-none">
				<a
					on:click={(e) => {
						e.preventDefault();
						window.print();
					}}
					href="/">
					<Icon name="printer" />
					Print this page
				</a>
			</span>
		</p>
	</Col>
</Row>

<!-- Mobile-only contact bar: horizontal icon row, placed after the header+education -->
<div class="d-md-none mobile-contacts">
	<a href="https://github.com/IAL32" target="_blank" aria-label="GitHub">
		<img src="img/icon-github.png" alt="GitHub" class="social-logo" />
	</a>
	<a href="https://www.linkedin.com/in/adriandcastrot/" target="_blank" aria-label="LinkedIn">
		<img src="img/icon-linkedin.png" alt="LinkedIn" class="social-logo" />
	</a>
	<a href="https://www.xing.com/profile/Adrian_Castro11/" target="_blank" aria-label="Xing">
		<img src="img/icon-xing.png" alt="Xing" class="social-logo" />
	</a>
	<a href="mailto:me@adct.it" aria-label="Email"><Icon name="envelope" /></a>
	<a
		class="d-print-none"
		href="/"
		aria-label="Print"
		on:click={(e) => {
			e.preventDefault();
			window.print();
		}}><Icon name="printer" /></a>
</div>
