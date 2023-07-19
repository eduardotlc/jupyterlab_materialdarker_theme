import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @oriolmirosa/jupyterlab_materialdarker extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_materialdarker_theme:plugin',
  description: 'A Material darker based JupyterLab theme extension.',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab_materialdarker_theme is activated!');
    const style = 'jupyterlab_materialdarker_theme/index.css';

    manager.register({
      name: 'jupyterlab_materialdarker_theme',
      isLight: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
