<template>
  <div class="schedule">
    <div class="labels">
      <div class="label"></div>
      <div class="label">Main Room</div>
      <div class="label">Some Other Room</div>
    </div>
    <div class="timeline">
      <div class="markers">
        <div class="marker">8PM</div>
        <div class="marker">9PM</div>
        <div class="marker">10PM</div>
        <div class="marker">11PM</div>
        <div class="marker">12AM</div>
        <div class="marker">1AM</div>
        <div class="marker">2AM</div>
        <div class="marker">3AM</div>
      </div>
      <div class="row">
        <div class="event">
          <div class="bubble">hewwo</div>
        </div>
        <div class="event">
          <div class="bubble">test event</div>
        </div>
      </div>
      <div class="row">
        <div class="empty"></div>
        <div class="event">
          <div class="bubble">test</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DynamicSchedule',
    props: {
      signup_enabled: Boolean,
      click: {
        type: Function,
        default: () => () => {},
      }
    },
    created() {
      // fetch schedule data
    }
  }
</script>

<style lang='scss' scoped>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';

  $X_SCALE: 80px;
  $Y_SCALE: 40px;

  .schedule {
    overflow:hidden;
    background: white;
    border: 2px solid map-get($PRIMARY, TEAL);
    width: 100%;
    border-radius: 12px;
    margin-bottom: 60px;
    display:flex;
    .labels {
      :nth-child(odd) { background: rgba( map-get($PRIMARY, TEAL), .3); }
      :nth-child(even) { background: rgba( map-get($PRIMARY, TEAL), .4);  }
      .label {
        min-width: $X_SCALE*2;
        height: $Y_SCALE;
        padding: 0 1rem;
        line-height: $Y_SCALE;
        font-weight: bold;
      }
    }
    .timeline {
      overflow-x:scroll;
      .markers {
        display: flex;
        height: $Y_SCALE;
        .marker { 
          min-width: $X_SCALE; 
          max-width: $X_SCALE; 
          background: white;
          font-weight:bold;
        }
      }
      .row {
        display: flex;
        height: $Y_SCALE;
      }
      .event {
        min-width: $X_SCALE*2;
        max-width: $X_SCALE*2;
        height: $Y_SCALE;
        .bubble {
          background: map-get($PRIMARY, YELLOW);
          padding: 6px 8px;
          margin: 4px;
          font-weight: bold;
          border-radius: 16px;
        }
      }
      .empty {
        width: $X_SCALE;
        height: $Y_SCALE;
      }
    }
  }
</style>
