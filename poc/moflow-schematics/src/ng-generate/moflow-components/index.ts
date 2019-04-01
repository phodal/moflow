import { Rule, Tree } from '@angular-devkit/schematics';
import { getProjectFromWorkspace } from '@angular/cdk/schematics';
import { getWorkspace } from '@schematics/angular/utility/config';
import chalk from 'chalk';
import { statSync as fsStatSync } from 'fs';
import { Schema } from './schema';

const bootPageHTML = `<!-- NG-ZORRO -->
<a href="https://github.com/phodal" target="_blank" style="display: flex;align-items: center;justify-content: center;height: 100%;width: 100%;">
  <img height="300" src="https://articles.phodal.com/qrcode.jpg">
</a>`;

export default function(options: Schema): Rule {
  return (host: Tree) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, options.project);
    const appHTMLFile = `${project.sourceRoot}/app/app.component.html`;
    const buffer = host.read(appHTMLFile);

    if (!buffer) {
      console.log();
      console.error(
        chalk.red(`Could not find the project ${chalk.blue(appHTMLFile)} file inside of the ` + `workspace config`)
      );
      return;
    }
    const stat = fsStatSync(appHTMLFile);
    console.log(stat, stat.mtimeMs, stat.ctimeMs);
    if (stat.mtimeMs === stat.ctimeMs) {
      host.overwrite(appHTMLFile, bootPageHTML);
    }

    return host;
  };
}
