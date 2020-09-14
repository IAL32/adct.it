<script>
	import Block from '$lib/Block.svelte';
	import EducationPiece from './EducationPiece.svelte';
</script>

<Block title="Education">
	<EducationPiece
		location="Munich, Germany, 2019 - Current"
		alt="TUM Logo"
		degree="M.Sc. Data Engineering and Analytics"
		logo="icon-tum.png"
		wip={true}
		name="Technische Universit&auml;t M&uuml;nchen" />
	<EducationPiece
		location="Milan, Italy, 2016 - 2019"
		alt="UniMiB Logo"
		logo="icon-unimib.png"
		degree="B.Sc. Computer Science"
		name="Universit&agrave; degli Studi di Milano-Bicocca" />
</Block>
