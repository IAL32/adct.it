<script>
	import { Col, Icon, Row } from 'sveltestrap';
</script>

<Row class="d-flex align-item-start">
	<Col>
		<div class="mt-5">
			<h1 class="full-name">Adrian Castro</h1>
		</div>

		<div class="mt-3 d-print-none" id="objective">
			<p>
				I am an experienced software engineer, with a focus on web technologies. Although, currently
				I am pursuing a Master's degree in Data Engineering and Analytics to expand my knowledge in
				machine learning and artificial intelligence.
			</p>
		</div>
	</Col>
	<Col xs="auto" class="pic">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src="img/profile_picture.png" alt="Photo of Adrian Castro" style="width: 150px" />
		<p>
			<img src="img/icon-github.png" alt="GitHub Link" class="brand-logo" />
			<a href="https://github.com/IAL32" target="_blank">IAL32</a>
		</p>
		<p>
			<img src="img/icon-linkedin.png" alt="LinkedIn Link" class="brand-logo" />
			<a href="https://www.linkedin.com/in/adriandcastrot/" target="_blank"> adriandcastrot </a>
		</p>
		<p>
			<img src="img/icon-xing.png" alt="Xin Link" class="brand-logo" />
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
