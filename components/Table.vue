<template lang="pug">
div
  .list.list_desk
    table.table
      thead.table__head.head
        tr.head__row
          th.head__col.head__col_name.col
            div.col__label Galaxy Name
            button.col__btn(
              type="button"
              @click="$emit('sort')"
            )
              img.col__img(
                :class="{'col__img_reversed': !sortFirst}"
                src="/arrow.svg"
              )
          th.head__col Constellation
          th.head__col Origin of name
      tbody.table__body.body
        tr.body__row(
          v-for="(item, i) in list"
          :key="i"
        )
          td.body__col.body__col_name.col
            .col__block.block
              .block__img(:style="{'background-image': `url(${item.img})`}")
              .block__text {{ item.name }}
          td.body__col {{ item.constellation }}
          td.body__col {{ item.originOfName }}
  .list.list_mob
    Card.list__card(
      v-for="(item, i) in list"
      :key="`${i}_card`"
      :card="item"
    )
    
</template>

<script>
import Card from '@/components/Card'
export default {
  name: 'Table',
  components: {
    Card
  },
  props: {
    list: { type: Array, required: true },
    sortFirst: { type: Boolean, default: true }
  }
}
</script>

<style lang="scss" scoped>
  .list {
    &__card {
      margin-top: 24px;
    }
    &_desk {
      display: block;
      @media (max-width: 768px) {
        display: none;
      }
    }
    &_mob {
      display: none;
      @media(max-width: 768px) {
        display: block;
      }
    }
  }
  .table {
    table-layout: fixed;
    border-spacing: 0;
    border-collapse: collapse;
  }
  .head {
    &__col {
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.75px;
      text-transform: uppercase;
      color: #909597;
      text-align: left;
      font-weight: 400;
      padding: 12px 0;
      &:nth-child(1) {
        width: 26.6%;
      }
      &:nth-child(2) {
        width: 19.8%;
        letter-spacing: 1px;
      }
      &_name {
        font-weight: 900;
        color: #263238;
        display: flex;
      }
    }
  }
  .body {
    &__row {
      background-color: #fff;
      transition: background-color .3s ease;
      &:hover {
        background-color: rgba(97, 128, 239, 0.2);
      }
    }
    &__col {
      border: 1px solid #E0E0E0;
      padding: 12px 15px;
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
      word-spacing: 0.1px;
      &_name {
        padding: 12px 15px 12px 20px;
        font-weight: 400;
      }
      &:nth-child(1) {
        width: 26.6%;
      }
      &:nth-child(2) {
        width: 19.8%;
      }
    }
  }
  .block {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    &__img {
      width: 30px;
      height: 30px;
      background-size: cover;
      margin-right: 20px;
      background-color: #E0E0E0;
    }
    &__text {
      width: calc(100% - 50px);
    }
  }
  .col {
    &__label {
      white-space: nowrap;
    }
    &__btn {
      margin-left: 5px;
      appearance: none;
      border: 0;
      box-shadow: none;
      background: transparent;
      padding: 0;
      outline: none;
      cursor: pointer;
    }
    &__img {
      max-width: 10px;
      transition: transform .3s ease;
      transform: rotate(0deg);
      &_reversed {
        transform: rotate(180deg);
      }
    }
  }
</style>