<script>
	import Block from '$lib/Block.svelte';
	import ExperiencePiece from './ExperiencePiece.svelte';
</script>

<Block title="Experience">
	<ExperiencePiece
		position="Senior Software Engineer"
		alt="Specter"
		company="Specter, 02/2026 - Present"
		logo="icon-specter.svg">
		<ul>
			<li>
				<b>Built the MCP server from scratch</b> and led the design and rollout of most new public
				APIs.
			</li>
		</ul>
	</ExperiencePiece>

	<ExperiencePiece
		position="Senior Software Engineer"
		alt="Tacto"
		company="Tacto Technology GmbH, 09/2023 - 12/2025"
		logo="icon-tacto.png">
		<ul>
			<li>
				<b>Lead architectural decisions across the platform</b>, ensuring scalability, reliability,
				and performance in high-load, data-heavy environments.
			</li>
			<li>
				<b>Drive cross-functional technical initiatives</b> that have a broad impact across the product,
				working closely with Product Managers, Designers, and fellow Engineers.
			</li>
			<li>
				<b>Mentor and support other engineers</b>, fostering technical growth and best practices
				through design reviews, pair programming, and knowledge sharing.
			</li>
			<li>
				<b>Design and build distributed systems</b> that handle complex workflows and large volumes of
				energy data efficiently and securely.
			</li>
			<li>
				<b>Take ownership of critical components</b>, ensuring they evolve with the needs of the
				business and maintain a high bar for quality and resilience.
			</li>
			<li>
				<b>Influence technical direction and culture</b>, helping shape how we build systems and
				collaborate as a team.
			</li>
			<li>
				<b>Contribute to strategic planning</b>, helping define roadmaps and long-term technical
				vision in partnership with engineering and leadership.
			</li>
			<li>Bringing good vibes and good food</li>
		</ul>
	</ExperiencePiece>

	<ExperiencePiece
		position="Data Engineer"
		alt="IONITY"
		company="IONITY GmbH, 09/2022 - 08/2023"
		logo="icon-ionity.png">
		<ul>
			<li>
				Led the effort of modernizing the entire data structure from the ground-up on AWS, reducing
				costs by 50%. High availability, scalability and security were the main focus.
			</li>
			<li class="d-print-none">
				Modernized the team's development processes by introducing software-engineering
				methodologies, drastically reducing technical debt and increased trust in data processes
			</li>
			<li class="d-print-none">
				Created CI/CD pipelines on GitLab for automated deployments of Terraform code on AWS
			</li>
			<li class="d-print-none">
				Created pipelines involving Airflow, Glue and Kinesis Firehose handling hundreds of
				thousands of records per day coming from tens of sources within and outside our company
			</li>
			<li class="d-print-none">Increased speed of existing pipelines by 50% to 250%</li>
			<li class="d-print-none">
				Increased data awareness by setting company-wide standards in terms of data governance and
				policies
			</li>
		</ul>
	</ExperiencePiece>
	<ExperiencePiece
		position="Technical Co-Founder"
		alt="Joleat"
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
		compact
		position="Software Engineer"
		alt="data4life"
		company="D4L data4life gGmbH., 09/2021 - 08/2022"
		logo="icon-d4l.png" />
	<ExperiencePiece
		compact
		position="Software Engineer"
		alt="Heveloon Ltd"
		logo="icon-heveloon.png"
		company="Heveloon Ltd., 10/2020 - 09/2022" />
	<ExperiencePiece
		compact
		position="Staff Board Member"
		alt="UnixMiB"
		logo="icon-unixmib.png"
		company="UnixMiB, 2017 - Present" />
	<ExperiencePiece
		compact
		position="Software Engineer"
		alt="BioDataAnalysis GmbH"
		logo="icon-bda.svg"
		company="BioDataAnalysis GmbH., 2020 - 08/2021" />
	<ExperiencePiece
		compact
		position="Full-Stack Developer"
		alt="Net2Web Srl"
		logo="icon-tuttobarche.png"
		company="Net2Web Srl., 2017 - 2021" />
	<ExperiencePiece
		compact
		print={false}
		position="Internship"
		alt="UniMiB"
		logo="icon-unimib.png"
		company="Universit&agrave; degli studi di Milano-Bicocca, 03/2019 - 06/2019" />
	<ExperiencePiece
		compact
		print={false}
		position="Junior Partner"
		alt="Bicocca Security Laboratory"
		logo="icon-bislab.png"
		company="Bicocca Security Laboratory, 2017 - 2019" />
</Block>
