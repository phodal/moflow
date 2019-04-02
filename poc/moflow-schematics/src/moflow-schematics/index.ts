import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { getWorkspace } from '@schematics/angular/utility/config';
import { join, normalize } from '@angular-devkit/core';
import { Schema } from '../moflow-components/schema';


export function setupOptions(host: Tree, options: any): Tree {
  const workspace = getWorkspace(host);
  if (!options.project) {
    options.project = Object.keys(workspace.projects)[0];
  }
  const project = workspace.projects[options.project];
  options.path = join(normalize(project.root), 'src');
  return host;
}

export function moflowSchematics(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    setupOptions(tree, _options);

    _options.componentCode = `
    function blabla() {
    
    }
    `;

    _options.componentTemplate = `<h1>hello, world</h1>`;

    _options.componentStyle = `
    .halo {
      background: #fff;
    }
    `;

    return tree;
  };
}
