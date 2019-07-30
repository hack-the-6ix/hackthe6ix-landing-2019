<template>
  <Container block="privacy" as="section">
    <Card class="privacy__card" as="ul">
      <PrivacyData />
    </Card>
  </Container>
</template>

<script>
import {Card, Container} from '@components';
import PrivacyData from './render';

export default {
  name: 'Privacy',
  path: '/privacy',
  components: {
    Card,
    Container,
    PrivacyData,
  },
};
</script>

<style lang="scss">
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.privacy {
  padding: 140px 0 80px;
  background-image: url('~@assets/background.svg?file');
  background-position: right center;
  background-size: cover;

  &__card {
    width: 100%;
    padding: 40px;
    font-size: 1.02rem;
    list-style-type: none;

    h1 {
      font-size: 2rem;
      margin: 0;
    }

    h2 {
      color: map-get($PRIMARY, TEAL);
      margin: 30px 0 -5px;
    }

    p,
    li {
      line-height: 1.8;
    }

    li {
      padding-bottom: 10px;
    }

    & > ul,
    h1 ~ ul {
      list-style-type: none;
      padding: 0;
    }
  }
}
</style>
