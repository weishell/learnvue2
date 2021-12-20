<template>
  <div id="longlist">
		<virtual-list style="height: 500px; overflow-y: auto;" 
		      :data-key="'id'"
		      :data-sources="arr"
		      :data-component="itemComponent"
		/>
  </div>
</template>

<script>
	import Item from '../components/longlist/item.vue'
	import VirtualList from 'vue-virtual-scroll-list'
	export default{
		data(){
			return{
				itemComponent: Item,
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
			VirtualList
		}
		
	}
</script>

<style>
	.scroller{
		height: 200px;
	}
	#longlist{
		height:500px;
		background: blue !important;
		
	}
</style>
