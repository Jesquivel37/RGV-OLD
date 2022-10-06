<template>
  <div class="home">
    <Carousel />
    <Ecomms />
    <Stats />
    <Callvolume />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Home/Carousel'
import Ecomms from '@/components/Home/Ecomms'
import Stats from '@/components/Home/Stats'
import Callvolume from '@/components/Home/Callvolume'
import { inject } from 'vue'
export default {
  name: 'Home',
  components: {
    Carousel, Ecomms, Stats, Callvolume
  },
  setup() {
    const stats = inject('stats')
    return { stats }
  },
  mounted() {
    this.stats.methods.getYear()
    this.stats.methods.getMonth()
    this.stats.methods.getCurrent()
    
    
  }
}
</script>
