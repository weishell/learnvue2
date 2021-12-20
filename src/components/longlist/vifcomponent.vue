<template>
  <div>vif-v-show</div>
</template>

<script>
export default {
    props:['context'],
    data(){
        return{

        }
    },
    created(){
        console.log(`created${this.context}`)
    },
    mounted(){
        console.log(`mounted${this.context}`)
    },
    beforeDestroy(){
        console.log(`beforeDestory${this.context}`)

    }
}
</script>

<style>

</style>