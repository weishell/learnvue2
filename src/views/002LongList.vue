<template>
  <div id="longlist">
	<RecycleScroller
	    class="scroller"
	    :items="arr"
	    :item-size="32"
	    key-field="id"
	    v-slot="{ item }"
	  >
	    <div class="user">
	     <span>{{item.val}}=1</span>
	     <span>{{item.val}}=2</span>
	     <span>{{item.val}}=3</span>
	     <span>{{item.val}}=3</span>
	     <span>{{item.val}}=3</span>
	     <span>{{item.val}}=3</span>
	     <span>{{item.val}}=3</span>
	     <span>{{item.val}}=3</span>
	     <span>{{item.val}}=3</span>
	     <span>{{item.val}}=3</span>
	    </div>
	  </RecycleScroller>
  </div>
</template>

<script>
	import { RecycleScroller } from 'vue-virtual-scroller'
	import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
	export default{
		data(){
			return{
				arr:[]
			}
		},
		mounted(){
			for(let i=0;i<100000;i++){
				this.arr.push({
					id:i,
					val:`钉钉`+i
				})
			}
		},
		components:{
			RecycleScroller
		}
		
	}
</script>

<style>
	.scroller{
		height: 100%;
	}
	#longlist{
		height:500px;
		background: blue !important;
		
	}
</style>

