<script>
	import Block from '$lib/Block.svelte';
	import ExtLink from '$lib/ExtLink.svelte';
	import ExperiencePiece from './ExperiencePiece.svelte';
</script>

<Block title="Experience">
	<ExperiencePiece
		position="Senior Data Engineer"
		alt="Tacto Logo"
		company="Tacto GmbH, 09/2023 - Present"
		logo="icon-tacto.png">
		<ul>
			<li>Leading the company to be data-driven</li>
			<li>Building a data platform from the ground-up on Azure</li>
		</ul>
	</ExperiencePiece>

	<ExperiencePiece
		position="Data Engineer"
		alt="IONITY Logo"
		company="IONITY GmbH, 09/2022 - 08/2023"
		logo="icon-ionity.png">
		<ul>
			<li>
				Led the effort of modernizing the entire data structure from the ground-up on AWS, reducing
				costs by 50%
			</li>
			<li>
				Modernized the team's development processes by introducing software-engineering
				methodologies, drastically reducing technical debt and increased trust in data processes
			</li>
			<li>Created CI/CD pipelines on GitLab for automated deployments of Terraform code on AWS</li>
			<li>
				Created pipelines involving Airflow, Glue and Kinesis Firehose handling hundreds of
				thousands of records per day coming from tens of sources within and outside our company
			</li>
			<li>Increased speed of existing pipelines by 50% to 250%</li>
			<li>
				Increased data awareness by setting company-wide standards in terms of data governance and
				policies
			</li>
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
		position="Software Engineer"
		alt="data4life Logo"
		company="D4L data4life gGmbH., 09/2021 - 08/2022"
		logo="icon-d4l.png">
		<ul>
			<li>
				Led the integration of
				<ExtLink href="https://github.com/notaryproject/notary/">Notary</ExtLink>
				for securing company's infrastructure
			</li>
			<li>
				Increased productivity by 30% by speeding up Jenkins pipelines and Ansible deployments
			</li>
		</ul>
	</ExperiencePiece>
	<ExperiencePiece
		position="Software Engineer"
		alt="Heveloon Ltd Logo"
		logo="icon-heveloon.png"
		company="Heveloon Ltd., 10/2020 - 09/2022">
		<ul>
			<li>Backend development of REST APIs and integration with Blockchain applications</li>
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
		position="Technical Co-Founder"
		alt="Joleat Logo"
		logo="icon-joleat.png"
		company="Joleat, 2019 - 2022">
		<ul>
			<li>Pitched our company to hundreds of people</li>
			<li>Grew the company from 0 to 400 sales in just 6 months</li>
			<li>Onboarded 60+ business partners to sell on our platform</li>
			<li>Everything with no capital invested in marketing</li>
		</ul>
	</ExperiencePiece>
	<ExperiencePiece
		position="Software Engineer"
		alt="BioDataAnalysis GmbH Logo"
		logo="icon-bda.svg"
		company="BioDataAnalysis GmbH., 2020 - 08/2021">
		<ul>
			<li>Developed high-performance C++ internal libraries</li>
			<li>Worked on frontend applications with data coming from our C++ Thrift APIs</li>
		</ul>
	</ExperiencePiece>
	<ExperiencePiece
		position="Full-Stack Developer"
		alt="Net2Web Srl Logo"
		logo="icon-tuttobarche.png"
		company="Net2Web Srl., 2017 - 2021">
		<ul>
			<li>Doubled the the monthly number of visitors from 20.000 to 40.000</li>
			<li>Increased speed of monolithic Java web application by 75%</li>
			<li>Managed tens of independent WordPress websites</li>
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
</Block>
