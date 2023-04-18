<template>
	<main id="contact-page">
		<div class="logo">
			<img :src="logoURL" alt="logo" /> <span class="material-icons">email</span>
		</div>
		<p>This is the contact page</p>
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
        .material-icons {
				font-size: 4rem;
                color: var(--primary);
			}
			
	}

			
</style>