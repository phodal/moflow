/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { chain, externalSchematic, noop, Rule, Tree } from '@angular-devkit/schematics';
import {
  addModuleImportToModule,
  buildComponent,
  findModuleFromOptions, getProjectFromWorkspace, getProjectMainFile, getProjectStyleFile, getSourceFile,
} from '@angular/cdk/schematics';
import {Schema} from './schema';
import { getWorkspace } from '@schematics/angular/utility/config';
import { italic, red } from '@angular-devkit/core/src/terminal';

/**
 * Scaffolds a new dashboard component.
 * Internally it bootstraps the base component schematic
 */
export default function(options: Schema): Rule {
  return chain([
    // 读取文件
    options.configFile ? readFileConfig(options) : noop(),
    options.skipImport ? noop() : addNavModulesToModule(options),
    // 扩展模块
    externalSchematic('moflow-schematics', 'moflow-schematics', options),
    buildComponent({...options}, {
      template: './__path__/__name@dasherize@if-flat__/__name@dasherize__.component.html',
      stylesheet: './__path__/__name@dasherize@if-flat__/__name@dasherize__.component.__styleext__',
    }),
    appendCode(options),
    appendStyle(options)
  ]);
}

// @ts-ignore
/**
 * Adds the required modules to the relative module.
 */
function addNavModulesToModule(options: Schema) {
  return (host: Tree) => {
    const modulePath = findModuleFromOptions(host, options)!;
    addModuleImportToModule(host, modulePath, 'LayoutModule', '@angular/cdk/layout');
    return host;
  };
}

function readFileConfig(options: Schema) {
  return (host: Tree) => {
    let configFilePath = options.configFile;
    let sourceFile = getSourceFile(host, configFilePath);
    let moflowConfig = JSON.parse(sourceFile.text);
    options.componentData = moflowConfig;
    return host;
  };
}

function appendCode(options: Schema) {
  return (host: Tree) => {

    const workspace = getWorkspace(host);
    // const project = getProjectFromWorkspace(workspace, options.project);
    let filePath = `src/app/${options.name}/${options.name}.component.ts`;
    const recorder = host.beginUpdate(filePath);

    const buffer = host.read(filePath);
    if (!buffer) {
      console.warn(red(`Could not read the default style file within the project ` +
        `(${italic(filePath)})`));
      console.warn(red(`Please consider manually setting up the Robot font.`));
      return;
    }

    const codeContent = buffer.toString();

    let beforeLastLine = codeContent.length - 5;
    recorder.insertRight(beforeLastLine, `  halo() {} `);
    host.commitUpdate(recorder);

    return host;
  };
}

function appendStyle(options: Schema): Rule {
  return (host: Tree) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, options.project);
    const styleFilePath = getProjectStyleFile(project);

    if (!styleFilePath) {
      console.warn(red(`Could not find the default style file for this project.`));
      console.warn(red(`Please consider manually setting up the Roboto font in your CSS.`));
      return;
    }

    const buffer = host.read(styleFilePath);

    if (!buffer) {
      console.warn(red(`Could not read the default style file within the project ` +
        `(${italic(styleFilePath)})`));
      console.warn(red(`Please consider manually setting up the Robot font.`));
      return;
    }

    const htmlContent = buffer.toString();
    const insertion = '\n' +
      `html, body { height: 100%; }\n` +
      `body { margin: 0; font-family: Roboto, "Helvetica Neue", sans-serif; }\n`;

    if (htmlContent.includes(insertion)) {
      return;
    }

    const recorder = host.beginUpdate(styleFilePath);

    recorder.insertLeft(htmlContent.length, insertion);
    host.commitUpdate(recorder);
  };
}

