import * as LayoutPages from './layouts';
import * as Layouts from '../layouts';

// Automate all routing based on component metadata + filesystem
export const routes = (
  Object.values(Layouts).map(layout => ({
    path: layout.path,
    exact: layout.exact,
    component: layout,
    children: Object.values(LayoutPages[layout.name]).map(component => {
      const { name, path = '' } = component;
      return { path, name, component };
    })
  }))
);