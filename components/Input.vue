<template lang="pug">
  div.field
    img.field__icon(src="/search.svg")
    input.field__input(
      type="text"
      placeholder="Search galaxies"
      :value="value"
      @input="$emit('input', $event.target.value)"
    )
</template>
<script>
export default {
  name: 'Input',
  props: {
    value: { type: String, default: '' }
  }
}
</script>

<style lang="scss" scoped>
  .field {
    display: flex;
    align-items: center;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 6px 6px 6px 11px;
    width: 271px;
    &__icon {
      max-width: 16px;
    }
    &__input {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.25px;
      border: 0;
      width: 210px;
      margin-left: 13px;
      font-weight: 400;
      color: #909597;
      outline: none;
      &::placeholder {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.25px;
        color: #909597;
        font-weight: 400;
      }
    }
  }
</style>