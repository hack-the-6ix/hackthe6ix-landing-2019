<template>
  <Container block="home" as="section">
    <div class="home__content">
      <h1 class="home__title">Hack The 6ix</h1>
      <p class="home__text home__text--intact">
        Presented By <Intact class="home__intact" />
      </p>
      <p class="home__text">August 23-25, 2019</p>
      <p class="home__text">{{ venue }}</p>
      <div class="home__timer">
        <!-- <h2 class='home__timer-title'>Countdown to Applications</h2> -->
        <div class="home__clock">
          <div class="home__clock-section">
            {{ String(time[0]).padStart(2, '0') }}
            <span class="home__clock-text">Days</span>
          </div>
          :
          <div class="home__clock-section">
            {{ String(time[1]).padStart(2, '0') }}
            <span class="home__clock-text">Hours</span>
          </div>
          :
          <div class="home__clock-section">
            {{ String(time[2]).padStart(2, '0') }}
            <span class="home__clock-text">Minutes</span>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import {Container} from '@components';
import Intact from '@assets/sponsors/intact-insurance.svg';
import {venue} from '@data';

const END_TIME = new Date('2019-08-23T04:00:00.000Z');
const intervals = [86400000, 3600000, 60000]; // Days, Hours, Minutes

export default {
  name: 'Home',
  path: '/#',
  components: {
    Container,
    Intact,
  },
  data() {
    return {
      time: [0, 0, 0],
      venue,
    };
  },
  methods: {
    timer() {
      let diff = END_TIME - new Date();
      this.time = intervals.reduce((acc, curr) => {
        const i = Math.floor(diff / curr);
        diff -= i * curr;
        acc.push(i);
        return acc;
      }, []);
    },
  },
  mounted() {
    this._timer = window.setTimeout(() => {
      this.timer();
    }, 15000);
    this.timer();
  },
  destroyed() {
    clearInterval(this._timer);
  },
};
</script>

<style lang="scss">
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.home {
  height: 100vh;
  min-height: 950px;
  margin-bottom: -1px;
  background-size: cover;
  background-position: center bottom;
  background-image: url('~@assets/background.svg?file');

  &__container {
    @include flex(flex-end, flex-start);
    position: relative;
    align-self: stretch;
  }

  &__content {
    @include flex(column, center);
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    width: 500px;
    margin: 220px 0 auto;
    max-width: 100%;
  }

  &__title {
    font-size: 4rem;
    margin: 30px 0 0;
  }

  &__text {
    font-size: 1.6rem;
    margin: 8px 0 0;
    &--intact {
      @include flex(center);
      color: map-get($PRIMARY, TEAL);
    }
  }

  &__intact {
    width: 100px;
    margin-left: 15px;
    margin-bottom: 5px;
  }

  &__timer {
    @include flex(column, center);
    background-color: rgba(255, 255, 255, 0.7);
    padding: 30px 20px;
    border-radius: 8px;
    margin-top: 30px;
    max-width: 420px;
    width: 100%;
  }

  &__timer-title {
    text-transform: uppercase;
    color: map-get($PRIMARY, TEAL);
    font-weight: bold;
    font-size: 1.3rem;
    margin: 0;
  }

  &__clock {
    @include flex(center, flex-start);
    width: 100%;
    font-size: 3.2rem;
    margin-top: 10px;

    &-section {
      @include flex(column, center);
      padding-top: 4px;
      flex-grow: 1;
      flex-shrink: 0;
    }

    &-text {
      font-size: 0.95rem;
    }
  }
}

@include media(LAPTOP) {
  .home {
    @include flex(center);
    margin-top: -60px;

    &__content {
      margin: 220px auto auto;
    }
  }
}

@include media(PHONE) {
  .home {
    background-image: url('~@assets/background-small.svg?file');

    &__content {
      margin-top: 100px;
    }

    &__logo {
      width: 15%;
    }

    &__title {
      font-size: 3.2rem;
    }

    &__text {
      font-size: 1.4rem;
    }

    &__intact {
      width: 70px;
      margin-left: 10px;
    }

    &__timer {
      max-width: 100%;
      padding: 40px 20px;
      box-sizing: border-box;
    }

    &__clock {
      font-size: 2.5rem;
      &-text {
        font-size: 0.75rem;
      }
    }
  }
}
</style>
