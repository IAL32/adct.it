<script>
	import { Col, Icon, Row } from '@sveltestrap/sveltestrap';
	import EducationPiece from '$lib/Education/EducationPiece.svelte';
</script>

<!-- Mobile-only header: small avatar inline with the name -->
<div class="d-md-none d-print-none mobile-header mt-4">
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

<Row class="d-flex align-items-start about-row">
	<Col xs="12" md>
		<!-- Desktop-only name + languages (mobile uses .mobile-header above) -->
		<div class="d-none d-md-block d-print-block mt-5">
			<h1>Adrian Castro</h1>

			<small>
				Based in M&uuml;nchen, Germany | Italian (C2), Spanish (C2), English (C1), German (B1),
				French (A2), Portuguese (A2)
			</small>
		</div>

		<Row class="mt-3 d-print-none" id="education">
			<EducationPiece
				location="2019 - 2022"
				alt="TUM"
				degree="M.Sc. Data Engineering"
				logo="icon-tum.png"
				name="TUM" />
			<EducationPiece
				location="2016 - 2019"
				alt="UniMiB"
				logo="icon-unimib.png"
				degree="B.Sc. Computer Science"
				name="UniMiB" />
		</Row>
	</Col>
	<Col md="auto" class="pic d-none d-md-block d-print-block">
		<!-- Print-only education entries: sit alongside the socials on print -->
		<div class="d-none d-print-block print-education-list">
			<p class="print-education">
				<img class="brand-logo" alt="TUM" src="img/icon-tum.png" />
				M.Sc. Data Engineering @ TUM, 2019 - 2022
			</p>
			<p class="print-education">
				<img class="brand-logo" alt="UniMiB" src="img/icon-unimib.png" />
				B.Sc. Computer Science @ UniMiB, 2016 - 2019
			</p>
		</div>
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src="img/profile_picture.png" alt="Photo of Adrian Castro" style="width: 150px" />
		<p>
			<img src="img/icon-github.png" alt="" class="social-logo" />
			<a href="https://github.com/IAL32" target="_blank" rel="noopener noreferrer"
				aria-label="GitHub: IAL32">IAL32</a>
		</p>
		<p>
			<img src="img/icon-linkedin.png" alt="" class="social-logo" />
			<a href="https://www.linkedin.com/in/adriandcastrot/" target="_blank" rel="noopener noreferrer"
				aria-label="LinkedIn: adriandcastrot">adriandcastrot</a>
		</p>
		<p>
			<img src="img/icon-xing.png" alt="" class="social-logo" />
			<a href="https://www.xing.com/profile/Adrian_Castro11/" target="_blank" rel="noopener noreferrer"
				aria-label="Xing: Adrian_Castro11">Adrian_Castro11</a>
		</p>
		<p>
			<Icon name="envelope" aria-hidden="true" />
			<a href="mailto:me@adct.it">me@adct.it</a>
		</p>
		<p class="d-none d-print-block">
			<a href="https://adct.it">
				<Icon name="link-45deg" aria-hidden="true" />
				Website
			</a>
		</p>
		<p class="d-print-none">
			<button type="button" class="link-button" on:click={() => window.print()}>
				<Icon name="printer" aria-hidden="true" />
				Print this page
			</button>
		</p>
	</Col>
</Row>

<!-- Mobile-only contact bar: horizontal icon row, placed after the header+education -->
<div class="d-md-none d-print-none mobile-contacts">
	<a href="https://github.com/IAL32" target="_blank" rel="noopener noreferrer" aria-label="GitHub: IAL32">
		<img src="img/icon-github.png" alt="" class="social-logo" />
	</a>
	<a href="https://www.linkedin.com/in/adriandcastrot/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn: adriandcastrot">
		<img src="img/icon-linkedin.png" alt="" class="social-logo" />
	</a>
	<a href="https://www.xing.com/profile/Adrian_Castro11/" target="_blank" rel="noopener noreferrer" aria-label="Xing: Adrian_Castro11">
		<img src="img/icon-xing.png" alt="" class="social-logo" />
	</a>
	<a href="mailto:me@adct.it" aria-label="Email me@adct.it"><Icon name="envelope" aria-hidden="true" /></a>
	<button type="button" class="link-button d-print-none" aria-label="Print this page" on:click={() => window.print()}>
		<Icon name="printer" aria-hidden="true" />
	</button>
</div>
