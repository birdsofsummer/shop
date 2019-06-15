
<template>
  <div id="app">
    <router-view />
    <HelloComponent  :name="name" :initialEnthusiasm="5" />
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import HelloComponent from '@/components/cf/cf'

@Component({
  components: {
    HelloComponent,
  }
})
export default class App extends Vue {
    name="vvv"
}
</script>
