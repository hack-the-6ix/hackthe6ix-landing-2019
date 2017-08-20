<template>
  <div class="countdown">
    <div class="block">
        <p class="digit">{{ days }}</p>
        <p class="text">Days</p>
    </div>
    <div class="block">
        <p class="digit">{{ hours }}</p>
        <p class="text">Hours</p>
    </div>
    <div class="block">
        <p class="digit">{{ minutes }}</p>
        <p class="text">Minutes</p>
    </div>
    <div class="block">
        <p class="digit">{{ seconds }}</p>
        <p class="text">Seconds</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'countdown',
  created() {
    window.setInterval(() => {
        this.now = Math.trunc((new Date()).getTime() / 1000);
    }, 1000);
  },
  data () {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      date: Math.trunc(new Date(2017, 7, 26, 9) / 1000),
    }
  },
  computed: {
    seconds() {
        return ((this.date - this.now) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    },

    minutes() {
        return (Math.trunc((this.date - this.now) / 60) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    },

    hours() {
        return (Math.trunc((this.date - this.now) / 60 / 60) % 24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    },

    days() {
        return (Math.trunc((this.date - this.now) / 60 / 60 / 24)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    }
  }
}
</script>

<style scoped>
.countdown {
  display:flex;
  justify-content: space-around;
  width:100%;
  max-width:600px;
  margin:auto;
  letter-spacing:1px;
}
.block {
    margin: 20px;
}

.text {
    color: #23b5af;
    font-size: 24px;
    font-weight: 40;
    margin-top:10px;
    margin-bottom: 10px;
    text-align: center;
}

.digit {
    color: #e5e5e5;
    font-size: 50px;
    font-weight: 100;
    margin: 10px;
    text-align: center;
}
</style>
