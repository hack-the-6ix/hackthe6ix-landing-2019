import Vue from 'vue';
import '@styles/pages/Landing/MainPage.scss';
import * as components from './sections';

const sections = Object.values(components);
export default Vue.component('MainPage', {
  render: h => h('main', {},
    sections.map(section => h(section))
  )
});