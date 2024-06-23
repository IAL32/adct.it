<script>
	import { Col, Icon, Row } from 'sveltestrap';
	import EducationPiece from '$lib/Education/EducationPiece.svelte';
</script>

<Row class="d-flex align-item-start">
	<Col>
		<div class="mt-5 full-name">
			<h1>Adrian Castro</h1>

			<small>
				Based in M&uuml;nchen, Germany | Italian (C2), Spanish (C2), English (C1), German (B1), French (A2)
			</small>
		</div>

		<div class="mt-3" id="education">
			<EducationPiece
				location="Munich, Germany, 2019 - 2022"
				alt="TUM Logo"
				degree="M.Sc. Data Engineering and Analytics"
				logo="icon-tum.png"
				name="TUM" />
			<EducationPiece
				location="Milan, Italy, 2016 - 2019"
				alt="UniMiB Logo"
				logo="icon-unimib.png"
				degree="B.Sc. Computer Science"
				name="UniMiB" />
		</div>
	</Col>
	<Col xs="auto" class="pic">
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
