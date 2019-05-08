import * as Sections from './sections';
import * as Layouts from '../layouts';

// Automate all routing based on component metadata + filesystem
export const routes = (
  Object.values(Layouts).map(layout => ({
    path: layout.path,
    component: layout,
    children: Object.values(Sections[layout.name]).map(component => {
      const { name, path = '' } = component;
      return { path, name, component };
    })
  }))
);