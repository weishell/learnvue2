<template>
  <div>
      <button @click='kfun'>{{k}}</button>
      <vif v-if='k' context='vif'/>
      <vif v-show='k' context='vshow'/>

  </div>
</template>

<script>
import vif from '@/components/longlist/vifcomponent';

export default {
    data(){
        return{
            k:false
        }
    },
    methods:{
        kfun(){
            this.k =!this.k
        }
    },
    components:{
        vif
    }
}
</script>

<style>

</style>