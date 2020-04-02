# NgAotRoutingIssue

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

# 🐞 bug report

### Affected Package
`@angular/compiler`
`@angular/router`

### Is this a regression?
Not sure

### Description
Conditional Routing works on JIT, But not with AOT.
However, compiler does not show any warning. 

## 🔬 Minimal Reproduction
use the following repo
https://github.com/yuvalbl/ng-aot-routing-issue

check out [app-routing](https://github.com/yuvalbl/ng-aot-routing-issue/blob/master/src/app/app-routing.module.ts)

steps:
1. clone repo 
2. `npm i`
3. `ng build --aot`
4. from `dist` directory run `npx serve -s` to serve the created build files
5. open the browser on full screen (more than 768 width) and see `Mobile` is displayed instead of `desktop`

## 🔥 Exception or Error
None (probably should show an error if Conditional Routing is not supported in AOT uet


## 🌍  Your Environment

**Angular Version:**
<pre><code>
Angular CLI: 9.1.0
Node: 12.14.1
OS: linux x64

Angular: 9.1.0
... animations, cli, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router
Ivy Workspace: Yes

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.901.0
@angular-devkit/build-angular     0.901.0
@angular-devkit/build-optimizer   0.901.0
@angular-devkit/build-webpack     0.901.0
@angular-devkit/core              9.1.0
@angular-devkit/schematics        9.1.0
@ngtools/webpack                  9.1.0
@schematics/angular               9.1.0
@schematics/update                0.901.0
rxjs                              6.5.4
typescript                        3.8.3
webpack                           4.42.0

</code></pre>

