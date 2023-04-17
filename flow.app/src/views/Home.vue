<template>
	<main id="Home-page">
		<div class="logo">
			<img :src="logoURL" alt="logo" /> 
		</div>
		<p>This is the home page</p>
	</main>
</template>

<script setup>
import logoURL from '/flowgo.png'
</script>

<style lang="scss" scoped>
.logo {
		margin: 0 -0.6rem;
		margin-bottom: 1rem;

		img {
			width: 14rem;
		}
	}
</style>