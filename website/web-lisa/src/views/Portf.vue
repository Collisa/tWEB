<template>
  <h1>Portfolio</h1>
</template>

<script>
export default {
  methods: {
    onClickImaginary(event) {
      this.$emit('clicked', 'Portfolio')
    }
  }
}
</script>