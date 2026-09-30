<script lang="ts">
	import { page } from '$app/stores';
	import { Container } from '@sveltestrap/sveltestrap';

	import '../app.css';

	const title = 'Adrian David Castro Tenemaya – Backend Tech Lead';
	const description = 'Backend Tech Lead at Specter, based in Munich. Distributed systems, data platforms and APIs.';
	const imageDescription = 'Photo of Adrian Castro';
	const fullUrl = 'https://' + $page.url.host;
	const profilePictureUrl = fullUrl + '/img/profile_picture.png';
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="description" content={description} />
	<meta property="twitter:image" content={profilePictureUrl} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />

	<meta property="og:url" content={fullUrl} />
	<meta property="og:image" content={profilePictureUrl} />
	<meta property="og:image:alt" content={imageDescription} />
	<meta property="og:title" content={title} />
	<meta property="og:site_name" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
</svelte:head>

<main class="flex-shrink-0 mt-3">
	<Container>
		<slot />
	</Container>
</main>
