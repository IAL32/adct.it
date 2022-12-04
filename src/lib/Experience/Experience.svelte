<script>
	import Block from '$lib/Block.svelte';
import ExtLink from '$lib/ExtLink.svelte';
	import ExperiencePiece from './ExperiencePiece.svelte';
</script>

<Block title="Experience">
	<ExperiencePiece
		position="Data Engineer"
		alt="IONITY Logo"
		company="IONITY GmbH, 09/2022 - Present"
		logo="icon-ionity.png">
		<ul>
			<li>I am building and automating production pipelines for data centered around EV charging using AWS</li>
			<li>I am designing the structure and schema of the company's central data lake and warehouse</li>
			<li>I am defining the internal and external data goals for the company</li>
		</ul>
	</ExperiencePiece>
	<ExperiencePiece
		position="Software Engineer"
		alt="TUM AI Logo"
		company="TUM.AI, 04/2022 - Present"
		logo="icon-tum-ai.png">
		<ul>
			<li>Re-designed the TUM.ai website from scratch using <ExtLink href="https://github.com/vercel/next.js">Next.js</ExtLink></li>
			<li>Helped to organize the software development team</li>
		</ul>
	</ExperiencePiece>
	<ExperiencePiece
		position="Software Engineer"
		alt="data4life Logo"
		company="D4L data4life gGmbH., 09/2021 - Present"
		logo="icon-d4l.png">
		<ul>
			<li>Software Engineer with DevOps / SRE mindset</li>
			<li>
				Led the integration of
				<ExtLink href="https://github.com/notaryproject/notary/"> Notary </ExtLink>
				for securing company's infrastructure
			</li>
			<li>Developed and maintained CI/CD pipelines with Jenkins</li>
			<li>Developed and maintained our Kubernetes clusters</li>
		</ul>
	</ExperiencePiece>
	<ExperiencePiece
		position="Software Engineer"
		alt="BioDataAnalysis GmbH Logo"
		logo="icon-bda.svg"
		company="BioDataAnalysis GmbH., 2020 - 08/2021">
		<ul>
			<li>Developed a custom web interface to show microscope data</li>
			<li>Developed backend of several internal applications</li>
			<li>Developed high-performance C++ libraries</li>
			<li>Learned and managed GitLab CI/CD pipelines</li>
		</ul>
	</ExperiencePiece>
	<ExperiencePiece
		position="Software Engineer"
		alt="Heveloon Ltd Logo"
		logo="icon-heveloon.png"
		company="Heveloon Ltd., 10/2020 - Present">
		<ul>
			<li>
				Projects:
				<a href="https://autumn-whispers.com/" target="_blank"> AutumnWhispers Ltd. </a>
				&bull;
				<a href="https://www.gameologycrypto.com/" target="_blank"> GUNOX </a>
				&bull;
				<a href="https://www.omegastations.com/" target="_blank"> Omegastations </a>
				&bull;
				<a href="https://www.widecareservices.com/" target="_blank"> Wide Care Services </a>
				&bull;
				<a href="https://www.sisterly.it/" target="_blank"> Sisterly </a>
				&bull;
				<a href="https://www.imperivm.io/" target="_blank"> Imperivm </a>
			</li>
		</ul>
	</ExperiencePiece>
	<ExperiencePiece
		position="Internship"
		alt="UniMiB Logo"
		logo="icon-unimib.png"
		company="Universit&agrave; degli studi di Milano-Bicocca, 03/2019 - 06/2019"
		print={false}>
		<ul>
			<li>
				Explored and developed a novel algorithm for cancer cell categorization using Particle Swarm
				Optimization
			</li>
		</ul>
	</ExperiencePiece>
	<ExperiencePiece
		position="Technical Co-Founder"
		alt="Joleat Logo"
		logo="icon-joleat.png"
		company="Joleat, 2019 - 2022">
		<ul>
			<li>Shaped company's technological goals</li>
			<li>Developed the website from ground-up</li>
		</ul>
	</ExperiencePiece>
	<ExperiencePiece
		position="Staff Board Member"
		alt="UnixMiB Logo"
		logo="icon-unixmib.png"
		company="UnixMiB, 2017 - Present">
		<ul>
			<li>Helped to propose, organize and setup of international events</li>
			<li>Actively committed to Open Source community</li>
		</ul>
	</ExperiencePiece>
	<ExperiencePiece
		position="Junior Partner"
		alt="Bicocca Security Laboratory Logo"
		logo="icon-bislab.png"
		company="Bicocca Security Laboratory, 2017 - 2019"
		print={false}>
		<ul>
			<li>Helped to coordinate tasks for security research</li>
			<li>Learned about state-of-the-art security standards (GDPR)</li>
		</ul>
	</ExperiencePiece>
	<ExperiencePiece
		position="Full-Stack Developer"
		alt="Net2Web Srl Logo"
		logo="icon-tuttobarche.png"
		company="Net2Web Srl., 2017 - 2021">
		<ul>
			<li>Helped to shape company's technological goals</li>
			<li>Developed the website from ground-up in Java</li>
			<li>Used by 30-40.000 users monthly</li>
		</ul>
	</ExperiencePiece>
</Block>
