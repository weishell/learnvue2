<template>
    <div>
        <button  @click='add'>button</button>
        <Fun :arr='arr'/>
    </div>
</template>

<script>
import Fun from '@/components/function/function.vue'
export default {
    data(){
        return {
         arr:[1,2,3,4,5]   
        }
    },
    methods:{
        add(){
            this.arr.push(this.arr.length+1)
        },
    },
    components:{
        Fun
    }
}
</script>

<style>

</style>