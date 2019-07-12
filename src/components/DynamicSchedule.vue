<template>
  <div class="schedule">
    <div class="labels">
      <div class="label"></div>
      <div class="label" v-for="location in locations" :key=location>{{location}}</div>
    </div>
    <div class="timeline">
      <div class="days">
        <div class="day friday">Friday</div>
        <div class="day saturday">Saturday</div>
        <div class="day sunday">Sunday</div>
      </div>
      <div class="markers">
        <div class="marker">
          <div class="m">8PM</div>
        </div>
        <div class="marker">
          <div class="m">9PM</div>
        </div>
        <div class="marker">
          <div class="m">10PM</div>
        </div>
        <div class="marker">
          <div class="m">11PM</div>
        </div>
        <div class="marker">
          <div class="m">12AM</div>
        </div>
        <div class="marker">
          <div class="m">1AM</div>
        </div>
        <div class="marker">
          <div class="m">2AM</div>
        </div>
      </div>
      <div class="row" v-for="event in events" :key=event.location>
        <div class="event" v-for="session in event.events" :key=session.id>
          <div class="bubble" :style="session_style(session)">{{session.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'DynamicSchedule',
    props: {
      signup_enabled: Boolean,
      click: {
        type: Function,
        default: () => () => {},
      }
    },
    data() {
      return {
        events: [],
        locations: [],
      }
    },
    methods: {
      get_unique_locations(events) {
        let locations = events.map(e => e.location).filter(l => l)
        return Array.from(new Set(locations))
      },
      events_by_location(events) {
        let locations = this.get_unique_locations(events)
        return locations.map((location) => {
          return { 
            location: location, 
            events: events.filter((e) => {
              return e.location == location
            })
          }
        })
      },
      session_style(event) {
        const x_ratio = 80 / 3600
        const start_time = new Date('2019-08-23T20:00:00-0400')
        const event_start = new Date(event.start)
        const event_finish = new Date(event.finish)
        let offset = Math.abs(start_time - event_start) / 1000
        let length = Math.abs(event_finish - event_start) / 1000
        return { 'margin-left': offset * x_ratio + 'px', width: length * x_ratio + 'px' }
      }
    },
    created() {
      // fetch schedule data
      const query = `
        query {
          events {
            title
            start
            finish
            location
            description
          }
        }
      `
      axios.post('http://hackthe6ix.com:4000/graphql', { query: query }).then((response) => {
        response = response.data.data
        this.events = this.events_by_location(response.events)
        console.log(this.events_by_location(response.events))
        this.locations = this.get_unique_locations(response.events)
      })
    }
  }
</script>

<style lang='scss' scoped>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';

  $X_SCALE: 80px; // if this changes, make sure to change the session_style x_ratio as well
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
      .days {
        display:flex;
        height: $Y_SCALE / 2;
        .day {
          margin: 2px 8px;
          line-height: $Y_SCALE / 2;
        }
        .friday { min-width:  ($X_SCALE * 4) - 16px; }
        .saturday { min-width:  ($X_SCALE * 6) - 16px; }
        .sunday { min-width:  ($X_SCALE * 4) - 16px; }
      }
      .markers {
        display: flex;
        height: $Y_SCALE / 2;
        .marker { 
          .m {
            margin: 0 8px;
          }
          min-width: $X_SCALE; 
          max-width: $X_SCALE; 
          // background: rgba( map-get($PRIMARY, TEAL), .3);
          font-weight:bold;
          line-height: $Y_SCALE / 2;
        }
      }
      .row {
        display: flex;
        height: $Y_SCALE;
        width:100%;
        position:relative;
      }
      .event {
        position:absolute;
        min-width: $X_SCALE;
        height: $Y_SCALE;
        width:100%;
        .bubble {
          position:absolute;
          white-space: nowrap;
          overflow:hidden;
          cursor: pointer;
          background: map-get($PRIMARY, YELLOW);
          padding: 6px 16px;
          margin: 4px;
          font-weight: bold;
          border-radius: 16px;
        }
      }
    }
  }
</style>
