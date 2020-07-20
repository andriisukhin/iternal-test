<template lang="pug">
  .page
    .page__head
      h1.page__title Named galaxies
      InputBlock.page__input(
        v-model="search"
        @input="setSearch(search)"
      )
    .page__body
      TableBlock(
        :list="galaxies"
        :sort-first="sortDirection"
        @sort="sortGalaxies"
      )
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import InputBlock from '@/components/Input'
import TableBlock from '@/components/Table'

export default {
  components: {
    InputBlock,
    TableBlock
  },
  methods: {
    ...mapActions([
      'getData'
    ]),
    ...mapMutations([
      'sortGalaxies',
      'setSearch'
    ])
  },
  computed: {
    ...mapGetters([
      'galaxies',
      'sortDirection'
    ])
  },
  async fetch() {
    await this.getData()
  },
  fetchOnServer: false,
  data() {
    return {
      search: ''
    }
  },
}
</script>

<style lang="scss">
  .page {
    &__head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media(max-width: 768px) {
        display: block;
      }
    }
    &__body {
      margin-top: 46px;
    }
    &__title {
      font-size: 34px;
      font-weight: 500;
      line-height: 41px;
      letter-spacing: 0.2px;
    }
    &__input {
      @media(max-width: 768px) {
        margin-top: 12px;
      }
    }
  }
</style>
