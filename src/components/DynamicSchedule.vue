<template>
  <div class="schedule">
    <div class="labels">
      <div class="label"></div>
      <div class="label" v-for="location in locations" :key="location">
        {{ location }}
      </div>
    </div>
    <div class="timeline">
      <div class="days">
        <div class="day friday">Friday</div>
        <div class="day saturday">Saturday</div>
        <div class="day sunday">Sunday</div>
      </div>
      <div class="markers">
        <div class="marker" v-for="timeslot in timeslots" :key="timeslot.index">
          <div class="m">{{ timeslot.label }}</div>
        </div>
      </div>
      <div
        class="row"
        v-for="event in events"
        :key="event.location"
        :style="row_style(event.position)"
      >
        <div class="event" v-for="session in event.events" :key="session.id">
          <div class="bubble" :style="session_style(session)">
            {{ session.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {query} from '@utils';
export default {
  name: 'DynamicSchedule',
  props: {
    signup_enabled: Boolean,
    click: {
      type: Function,
      default: () => () => {},
    },
  },
  data() {
    return {
      events: [],
      locations: [],
      start_time: new Date('2019-08-23T17:00:00-0400'),
      end_time: new Date('2019-08-25T14:00:00-0400'),
    };
  },
  computed: {
    timeslots() {
      let time_diff = this.num_hours(this.start_time, this.end_time);
      return Array(time_diff)
        .fill(0)
        .map((_s, i) => {
          let start = new Date(this.start_time);
          let time = new Date(start.setHours(start.getHours() + i));
          return {label: this.formatTimestamp(time), index: i};
        });
    },
  },
  methods: {
    get_unique_locations(events) {
      let locations = events.map(e => e.location).filter(l => l);
      return Array.from(new Set(locations));
    },
    events_by_location(events) {
      let locations = this.get_unique_locations(events);
      return locations.map((location, i) => {
        return {
          location: location,
          position: i,
          events: events.filter(e => {
            return e.location == location;
          }),
        };
      });
    },
    num_hours(start_time, end_time) {
      let time_diff = Math.abs(end_time - start_time) / 1000;
      return Math.abs(Math.round(time_diff / (60 * 60)));
    },
    session_style(event) {
      const x_ratio = 80 / 3600;
      const start_time = this.start_time;
      const event_start = new Date(event.start);
      const event_finish = new Date(event.finish);
      let offset = Math.abs(start_time - event_start) / 1000;
      let length = Math.abs(event_finish - event_start) / 1000;
      return {
        'margin-left': offset * x_ratio + 'px',
        width: length * x_ratio + 'px',
      };
    },
    row_style(index) {
      let bg_color =
        index % 2 == 0 ? 'rgba(35, 181, 175, 0.1)' : 'rgba(35, 181, 175, 0.0)';
      return {
        width: this.num_hours(this.start_time, this.end_time) * 80 + 'px',
        background: bg_color,
      };
    },
    formatTimestamp(date) {
      let hours = date.getHours();
      let ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12;
      return hours + ' ' + ampm;
    },
  },
  created() {
    query(
      `{
          events {
            title
            start
            finish
            location
            description
          }
        }
      `,
      {},
    ).then(response => {
      let events = response.map(e => {
        if (!e.location) {
          e.location = 'Atrium';
        }
        return e;
      });

      this.events = this.events_by_location(events);
      this.locations = this.get_unique_locations(events);
    });
  },
};
</script>

<style lang="scss" scoped>
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

$X_SCALE: 80px; // if this changes, make sure to change the session_style x_ratio as well
$Y_SCALE: 40px;

.schedule {
  overflow: hidden;
  background: white;
  border: 2px solid map-get($PRIMARY, TEAL);
  width: 100%;
  border-radius: 12px;
  margin-bottom: 60px;
  display: flex;
  .labels {
    :nth-child(odd) {
      background: rgba(map-get($PRIMARY, TEAL), 0.3);
    }
    :nth-child(even) {
      background: rgba(map-get($PRIMARY, TEAL), 0.4);
    }
    .label {
      min-width: $X_SCALE * 2;
      height: $Y_SCALE;
      padding: 0 1rem;
      line-height: $Y_SCALE;
      font-weight: bold;
    }
  }
  .timeline {
    overflow-x: scroll;
    .days {
      display: flex;
      height: $Y_SCALE / 2;
      .day {
        margin: 2px 8px;
        line-height: $Y_SCALE / 2;
      }
      .friday {
        min-width: ($X_SCALE * 4) - 16px;
      }
      .saturday {
        min-width: ($X_SCALE * 24) - 16px;
      }
      .sunday {
        min-width: ($X_SCALE * 4) - 16px;
      }
    }
    .markers {
      background: white !important;
      display: flex;
      height: $Y_SCALE / 2;
      .marker {
        .m {
          margin: 0 8px;
        }
        min-width: $X_SCALE;
        max-width: $X_SCALE;
        // background: rgba( map-get($PRIMARY, TEAL), .3);
        font-weight: bold;
        line-height: $Y_SCALE / 2;
      }
    }
    .row {
      display: flex;
      height: $Y_SCALE;
      width: 100%;
      position: relative;
    }
    .event {
      position: absolute;
      min-width: $X_SCALE;
      height: $Y_SCALE;
      width: 100%;
      .bubble {
        position: absolute;
        white-space: nowrap;
        overflow: hidden;
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
