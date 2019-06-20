<template>
  <Container block='home' as='section'>
    <Blimp class='home__blimp'/>
    <div class='home__content'>
      <h1 class='home__title'>Hack The 6ix</h1>
      <p class='home__text'>August 23-25, 2019</p>
      <p class='home__text'>Venue TBD</p>
      <div class='home__timer'>
        <Button class='home__button'>Countdown to Applications</Button>
        <div class='home__clock'>
          <div class='home__clock-section'>
            {{ String(time[0]).padStart(2, '0') }}
            <span class='home__clock-text'>Days</span>
          </div>
          :
          <div class='home__clock-section'>
            {{ String(time[1]).padStart(2, '0') }}
            <span class='home__clock-text'>Hours</span>
          </div>
          :
          <div class='home__clock-section'>
            {{ String(time[2]).padStart(2, '0') }}
            <span class='home__clock-text'>Minutes</span>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
  import { Container, Button } from '@components';
  import { Blimp } from '@assets';

  const END_TIME = new Date('2019-08-23T04:00:00.000Z');
  const intervals = [ 86400000, 3600000, 60000 ]; // Days, Hours, Minutes

  export default {
    name: 'Home',
    path: '#',
    components: {
      Container,
      Button,
      Blimp
    },
    data() {
      return {
        time: [0, 0, 0]
      }
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
      }
    },
    mounted() {
      this._timer = window.setTimeout(() => {
        this.timer();
      }, 15000);
      this.timer();
    },
    destroyed() {
      clearInterval(this._timer);
    }
  }
</script>


<style lang='scss'>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';

  .home {
    min-height: 100vh;
    margin-bottom: -1px;
    background-size: cover;
    background-position: center bottom;
    background-image: url('~@assets/background.svg?file');

    &__container {
      @include flex(center);
      position: relative;
      align-self: stretch;
    }

    &__blimp {
      @include position(absolute, 120px 10px auto auto);
      animation: enter 0.4s ease-in-out backwards, float 5s ease infinite;
      width: 600px;
      max-width: 50%;
      @keyframes enter {
        from { opacity: 0; } to { opacity: 1; }
      }

      @keyframes float {
        0% { transform: translate3d(0, -5px, 0); }
        50% { transform: translate3d(0, 5px, 0); }
        100% { transform: translate3d(0, -5px, 0); }
      }
    }

    &__content {
      @include flex(column, center);
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      margin: auto;
      width: 500px;
      max-width: 100%;
    }

    &__title, &__text {
      text-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      color: white;
    }

    &__title {
      font-size: 4rem;
      margin: 30px 0 0;
    }

    &__text {
      font-size: 1.6rem;
      margin: 8px 0 0;
    }

    &__timer {
      @include flex(column, center);
      margin-top: 30px;
      max-width: 420px;
      width: 100%;
    }

    &__button {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.1rem;
      pointer-events: none;
      box-shadow: 0 0 6px rgba(0,0,0,0.1);
    }

    &__clock {
      @include flex(center, flex-start);
      width: 100%;
      font-size: 3.2rem;
      margin-top: 20px;
      color: $TEXT;
      text-shadow: 0 0 14px rgba(0, 0, 0, 0.15);

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

  @include media(TABLET) {
    .home {
      &__blimp {
        max-width: 70%;
      }

      &__content {
        margin: 0 auto;
      }
    }
  }

  @include media(PHONE) {
    .home {
      padding-top: 70px;

      &__blimp {
        box-sizing: border-box;
        margin-right: auto;
        margin-top: 0;
        max-width: 100%;
        width: 100%;
        padding: 0 15px;
      }

      &__content {
        margin: 10vh auto auto;
      }

      &__logo {
        width: 15%;
      }

      &__title {
        font-size: 2.2rem;
      }

      &__text {
        font-size: 1.1rem;
      }

      &__button {
        font-size: 0.9rem;
      }

      &__timer {
        max-width: 300px;
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
