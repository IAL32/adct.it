<script>
	import Block from '$lib/Block.svelte';
	import ExperienceGroup from './ExperienceGroup.svelte';
	import ExperiencePiece from './ExperiencePiece.svelte';
	import ExperienceRole from './ExperienceRole.svelte';
</script>

<Block title="Experience">
	<ExperienceGroup company="Specter" alt="Specter" when="Feb 2026 – Present" logo="icon-specter.svg">
		<ExperienceRole position="Backend Tech Lead" when="Sep 2026 – Present">
			<ul>
				<li>
					Built the company's <b>MCP server</b> from scratch and led the design and rollout of most
					new public APIs.
				</li>
				<li>
					Design and build distributed systems that process large volumes of data reliably and
					securely.
				</li>
				<li>
					Lead architectural decisions across the platform, focusing on scalability and performance
					under high load.
				</li>
				<li>
					Drive cross-functional initiatives with Product, Design and Engineering, and help shape the
					technical roadmap with leadership.
				</li>
				<li>
					Mentor engineers through design reviews, pair programming and knowledge sharing.
				</li>
				<li>Bringing good vibes and good food</li>
			</ul>
		</ExperienceRole>
		<ExperienceRole position="Senior Software Engineer" when="Feb 2026 – Aug 2026" />
	</ExperienceGroup>

	<ExperiencePiece
		position="Senior Software Engineer"
		alt="Tacto"
		company="Tacto Technology GmbH"
		when="Sep 2023 – Dec 2025"
		logo="icon-tacto.png">
		<ul>
			<li>
				Mostly focused on the <b>Analytics product</b>, which is responsible for driving 60% of
				Tacto's ARR, per time of writing.
			</li>
			<li>
				Designed and shipped end-to-end features in a multi-tenant SaaS platform, from data
				pipelines and APIs to customer-facing dashboards.
			</li>
			<li>
				Improved performance, reliability and observability of core services, and took part in code
				reviews, on-call rotations and technical planning.
			</li>
		</ul>
	</ExperiencePiece>

	<ExperiencePiece
		position="Data Engineer"
		alt="IONITY"
		company="IONITY GmbH"
		when="Sep 2022 – Aug 2023"
		logo="icon-ionity.png">
		<ul>
			<li>
				Led the modernization of the entire data platform from the ground up on AWS, reducing costs
				by 50% with a focus on high availability, scalability and security.
			</li>
			<li>
				Built Airflow, Glue and Kinesis Firehose pipelines handling hundreds of thousands of records
				per day from tens of sources, speeding up existing pipelines by 50% to 250%.
			</li>
			<li>
				Introduced software-engineering practices, GitLab CI/CD for Terraform and company-wide data
				governance standards, drastically reducing technical debt.
			</li>
		</ul>
	</ExperiencePiece>
	<ExperiencePiece
		position="Technical Co-Founder"
		alt="Joleat"
		logo="icon-joleat.png"
		company="Joleat"
		when="2019 – 2022">
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
		company="D4L data4life gGmbH"
		when="Sep 2021 – Aug 2022"
		logo="icon-d4l.png" />
	<ExperiencePiece
		compact
		position="Software Engineer"
		alt="Heveloon Ltd"
		logo="icon-heveloon.png"
		company="Heveloon Ltd"
		when="Oct 2020 – Sep 2022" />
	<ExperiencePiece
		compact
		position="Staff Board Member"
		alt="UnixMiB"
		logo="icon-unixmib.png"
		company="UnixMiB"
		when="2017 – Present" />
	<ExperiencePiece
		compact
		position="Software Engineer"
		alt="BioDataAnalysis GmbH"
		logo="icon-bda.svg"
		company="BioDataAnalysis GmbH"
		when="2020 – Aug 2021" />
	<ExperiencePiece
		compact
		position="Full-Stack Developer"
		alt="Net2Web Srl"
		logo="icon-tuttobarche.png"
		company="Net2Web Srl"
		when="2017 – 2021" />
	<ExperiencePiece
		compact
		print={false}
		position="Internship"
		alt="UniMiB"
		logo="icon-unimib.png"
		company="Universit&agrave; degli Studi di Milano-Bicocca"
		when="Mar 2019 – Jun 2019" />
	<ExperiencePiece
		compact
		print={false}
		position="Junior Partner"
		alt="Bicocca Security Laboratory"
		logo="icon-bislab.png"
		company="Bicocca Security Laboratory"
		when="2017 – 2019" />
</Block>
