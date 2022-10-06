<template>
  <div class="wrap">
    <div id="nav">
        <Header @mobile="showNav = true;" />
          <div class="body">
            <router-view />
          </div>
        <Footer />
     </div>
     <Mobile-Nav v-if="showNav" @close="showNav = false;" />
  </div>
</template>
<script>

import {inject, ref} from 'vue'
import MobileNav from '@/components/Home/MobileNav'
import Header from '@/components/Home/Header'
import Footer from '@/components/Home/Footer'

export default {
  components: { Header, Footer, MobileNav},
  setup() {
    const letters = inject('letters')
    const showNav = ref(false)
	return { letters, showNav }
  },
  mounted() {
    this.letters.methods.getTickets()
    this.letters.methods.getPDFBytes()
  }
}
</script>
<style scoped>

 .body{
			margin: 0 auto;
			max-width: 1300px;
			background: white;
		}

			@media only screen and (max-width: 600px) {
			.body{
				max-width: 550px;
			}
		}

		@media only screen and (max-width: 400px) {
			.body{
				max-width: 350px;
			}
		}
</style>
