<template>
  <div>
	  <span>{{ index }} - {{ source.val }}</span>
	  <span> {{ source.val }}</span>
	  <span> {{ source.val }}</span>
	  <span> {{ source.val }}</span>
	  <span>{{ source.val }}</span>
	  <span> {{ source.val }}</span>
	  <span>{{ source.val }}</span>
	  <span> {{ source.val }}</span>
	  <span>{{ source.val }}</span>
	  <span> {{ source.val }}</span>
  </div>
</template>

<script>
  export default {
    name: 'item-component',
    props: {
      index: { // index of current item
        type: Number
      },
      source: { // here is: {uid: 'unique_1', text: 'abc'}
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>