<script>
	import Tool from "./Tool.svelte";
	export let tools_block = [];
	const {
		title,
		tools
	} = tools_block;
</script>

<div class="tools_block">
	<h4 class="category_title">{title}</h4>
	<div class="cards">
		{#each tools as tool}
			<Tool {tool} />
		{/each}
	</div>
</div>

<style lang="sass">
.tools_block
	padding: 1.5em 2em
	background-color: hsla(0, 0%, 13%, .6)
	box-shadow: inset 0px 0px 8px 5px hsl(0, 0%, 10%)
	border-radius: calc( $rad / 2 )
	&:not(:first-of-type)
		margin-top: 2em
.category_title
	text-transform: uppercase
	font-size: 1.3em
.cards
	margin-top: 1em
	display: flex
	flex-wrap: wrap
	gap: 1em
</style>