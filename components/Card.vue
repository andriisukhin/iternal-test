<template lang="pug">
  .card
    .card__section.section.section_top
      .section__label Galaxy Name
      .section__info.info
        .info__img(:style="{'background-image': `url(${card.img})`}")
        .info__title {{ card.name }}
    .card__section.section
      .section__label Constellation
      .section__info {{ card.constellation }}
    .card__section.section
      .section__label Origin of name
      .section__info {{ card.originOfName }}
</template>

<script>
export default {
  props: {
    card: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    border: 1px solid #E0E0E0;
    &__section {
      padding: 10px;
      &:not(:nth-child(3)) {
        border-bottom: 1px solid #E0E0E0;
      }
    }
    &:hover {
      .section_top {
        background-color: rgba(97, 128, 239, 0.2);
      }
    }
  }
  .section {
    &_top {
      .section {
        &__label {
          font-size: 10px;
          line-height: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        &__info {
          display: flex;
          align-items: center;
          margin-top: 10px;
        }
      }
    }
    &__label {
      font-size: 10px;
      line-height: 14px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #909597;
    }
    &__info {
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;
      margin-top: 10px;
    }
  }
  .info {
    &__img {
      width: 20px;
      height: 20px;
      background-size: cover;
      margin-right: 16px;
    }
    &__title {
      width: calc(100% - 36px);
      font-size: 16px;
      line-height: 20px;
    }
  }
</style>