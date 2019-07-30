import Vue from 'vue';
import {policy} from '@data';

const renderData = (h, {title, details = [], sections = []}, depth = 1) =>
  h('li', [
    h(`h${depth}`, title),
    ...details.map(detail => {
      switch (typeof detail) {
        case 'object': // Array
          return h('ul', detail.map(i => h('li', {domProps: {innerHTML: i}})));
        default:
          return h('p', {domProps: {innerHTML: detail}});
      }
    }),
    h('ul', sections.map(section => renderData(h, section, depth + 1))),
  ]);

export default Vue.component('PrivacyData', {
  render: h => renderData(h, policy),
});
