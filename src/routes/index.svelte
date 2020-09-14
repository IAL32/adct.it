<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import AboutMe from '$lib/AboutMe/AboutMe.svelte';
	import Block from '$lib/Block.svelte';
	import Education from '$lib/Education/Education.svelte';
	import Experience from '$lib/Experience/Experience.svelte';
	import ExtLink from '$lib/ExtLink.svelte';
	import { Col } from 'sveltestrap';
</script>

<AboutMe />
<Education />
<Experience />

<!-- Languages -->
<Block title="Languages">
	<Col xs="12" md="">
		<strong>Spanish &bull; Italian &bull; English</strong>
		-
		<i>Mother tongue / Advanced</i>
	</Col>
	<Col xs="12" md="">
		<strong>German</strong>
		-
		<i>A1 (read, write, spoken)</i>
		&bull;
		<strong>French</strong>
		-
		<i>A2 (read) A1(write) A1 (spoken)</i>
	</Col>
</Block>

<!-- Events -->
<Block title="Events" print={false}>
	<Col xs="12">
		<ExtLink href="https://linuxdaymilano.org/">Linux Day Milano 2019</ExtLink>
		- Event dedicated to Open Source, GNU/Linux, free software, sharing and open culture
	</Col>
	<Col xs="12">
		<ExtLink href="https://akademy.kde.org/2019">Akademy 2019</ExtLink>
		- Organized the yearly KDE Akademy with more 200+ people with UnixMiB
	</Col>
	<Col xs="12">
		<ExtLink href="https://mlconf.com/">MLConf San Francisco 2019</ExtLink>
		- Helped to organize the yearly MLConf in SF
	</Col>
</Block>

<!-- Papers and essays -->
<Block title="Papers and Essays">
	<Col xs="12">
		(UniMiB)
		<strong>Bachelor's Thesis:</strong>
		<ExtLink href="https://github.com/IAL32/UNIMIBThesis">
			Particle Swarm Optimization (PSO) for single-cell data
		</ExtLink>
	</Col>
	<Col xs="12">
		(TUM)
		<strong>Seminar Essay:</strong>
		<ExtLink href="https://github.com/IAL32/TUMSS20IRS">
			Collecting Implicit User Feedback for WordPress Websites
		</ExtLink>
	</Col>
	<Col xs="12">
		(TUM)
		<strong>Praktikum Project:</strong>
		<ExtLink href="https://github.com/IAL32/TUMWS20DMLAB">Big Data Mining of UN-Comtrade</ExtLink>
	</Col>
	<Col xs="12">
		(TUM)
		<ExtLink href="https://github.com/IAL32/TUMWS20DSS">Is This Real Life?</ExtLink>
		- An essay about the possible future implications of AI onto society.
	</Col>
	<Col xs="12">
		(TUM)
		<strong>Guided Research:</strong>
		<ExtLink href="https://github.com/IAL32/TUMWS21GR">
			Exploring and Analyzing Compression Algorithms in Preprocessing Pipelines
		</ExtLink>
		- A report about my work extending and testing TensorFlow with Zstandard on Machine Learning preprocessing
		pipelines.
	</Col>
	<Col xs="12">
		(TUM)
		<strong>Application Project:</strong>
		<ExtLink href="https://github.com/IAL32/TUMWS21AP">
			Model Parallelism: Challenges, State-of-the-art, and Future Directions
		</ExtLink>
		- A survey of current state-of-the-art in model parallelism.
	</Col>
</Block>

<!-- Tools -->
<Block title="Tools" print={false}>
	<Col xs="12">
		(UniMiB)
		<ExtLink href="https://github.com/IAL32/pso-cancer-evolution">PSO for Cancer Evolution</ExtLink>
		- The aim for the script is to find the optimal cancer evolution tree given an input matrix representing
		cancer cells
	</Col>
	<Col xs="12">
		(TUM)
		<ExtLink href="https://github.com/IAL32/wordpress-collect-implicit-feedback">
			WP Collect Implicit Feedback
		</ExtLink>
		- A WordPress plugin that tracks user clicks and path across the website, with the goal of feeding
		the data to interactive recommender systems.
	</Col>
	<Col xs="12">
		<ExtLink href="https://github.com/BioDataAnalysis/cdash-client">CDash CLI Client</ExtLink>
		- CDash API wrapper in Python.
	</Col>
	<Col xs="12">
		<ExtLink href="https://github.com/IAL32/WSL2-Create-Distro">
			Script to create WSL2 distro in a single command.
		</ExtLink>
	</Col>
	<Col xs="12">
		<ExtLink href="https://github.com/IAL32/voicemaker-python">
			A wrapper Python package around Voicemaker API.
		</ExtLink>
	</Col>
</Block>

<!-- Contributed to -->
<Block title="Contributed To" print={false}>
	<Col xs="12">
		<ExtLink href="https://github.com/flathunters/flathunter">Flathunter</ExtLink>
		- A Telegram bot to help people with their flat search.
	</Col>
	<Col xs="12">
		<ExtLink href="https://github.com/notaryproject/notary">Notary</ExtLink>
		- Implementation of the TUF framework for securing software updates.
	</Col>
	<Col xs="12">
		<ExtLink href="https://github.com/docker/docker.github.io">Docs @ Docker</ExtLink>
		- Docker official documentation repository.
	</Col>
	<Col xs="12">
		<ExtLink href="https://github.com/tensorflow/tensorflow">TensorFlow</ExtLink>
		- TensorFlow official repository.
	</Col>
</Block>

<Block title="Hobbies">
	<Col xs="12">
		I love to cook every kind of food and dish, you can take a look at
		<ExtLink href="https://recipes.adct.it/">recipes.adct.it</ExtLink>
		for indications on how to replicate them!
		<br />
		I also enjoy kickboxing and piano, although the latter is more like a dead hobby. My weakness is
		pausing movies or TV series to explain something happening there.
	</Col>
</Block>

<Block title="References" print={false}>
	<Col xs="12">Available on request</Col>
</Block>