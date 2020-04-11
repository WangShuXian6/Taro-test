
### 环境

>taro 通过 cnpm 安装

```
Taro v3.0.0-beta.3


  Taro CLI 3.0.0-beta.3 environment info:
    System:
      OS: macOS High Sierra 10.13.6
      Shell: 3.2.57 - /bin/bash
    Binaries:
      Node: 13.12.0 - /usr/local/bin/node
      npm: 6.14.4 - ~/.npm-global/bin/npm
    npmPackages:
      @tarojs/components: 3.0.0-beta.3 => 3.0.0-beta.3 
      @tarojs/taro: 3.0.0-beta.3 => 3.0.0-beta.3 
      @tarojs/webpack-runner: 3.0.0-beta.3 => 3.0.0-beta.3 
      eslint-config-taro: 3.0.0-beta.3 => 3.0.0-beta.3 
      react: ^16.10.0 => 16.13.1
```

### 复现步骤
```
npm run dev:weapp

# 修改组件 /components/common/Common.less 的 css 样式
```

### 报错信息
```
正在编译.../Users/wangshuxian/office/answer-searning-mini-program/node_modules/_webpack-sources@1.4.3@webpack-sources/lib/ConcatSource.js:42
                        source += typeof child === "string" ? child : child.source();
                                                                            ^

TypeError: Cannot read property 'source' of undefined
    at ConcatSource.source (/Users/wangshuxian/office/answer-searning-mini-program/node_modules/_webpack-sources@1.4.3@webpack-sources/lib/ConcatSource.js:42:56)
    at Object.source (/Users/wangshuxian/office/answer-searning-mini-program/node_modules/_@tarojs_mini-runner@3.0.0-beta.3@@tarojs/mini-runner/dist/plugins/TaroLoadChunksPlugin.js:85:70)
    at writeOut (/Users/wangshuxian/office/answer-searning-mini-program/node_modules/_webpack@4.42.0@webpack/lib/Compiler.js:454:29)
    at /Users/wangshuxian/office/answer-searning-mini-program/node_modules/_webpack@4.42.0@webpack/lib/Compiler.js:476:7
    at arrayIterator (/Users/wangshuxian/office/answer-searning-mini-program/node_modules/_neo-async@2.6.1@neo-async/async.js:3467:9)
    at timesSync (/Users/wangshuxian/office/answer-searning-mini-program/node_modules/_neo-async@2.6.1@neo-async/async.js:2297:7)
    at Object.eachLimit (/Users/wangshuxian/office/answer-searning-mini-program/node_modules/_neo-async@2.6.1@neo-async/async.js:3463:5)
    at emitFiles (/Users/wangshuxian/office/answer-searning-mini-program/node_modules/_webpack@4.42.0@webpack/lib/Compiler.js:358:13)
    at /Users/wangshuxian/office/answer-searning-mini-program/node_modules/_mkdirp@0.5.5@mkdirp/index.js:49:26
    at FSReqCallback.oncomplete (fs.js:172:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! answer-searning-mini-program@1.0.0 build:weapp: `taro build --type weapp "--watch"`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the answer-searning-mini-program@1.0.0 build:weapp script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/wangshuxian/.npm/_logs/2020-04-11T11_25_56_933Z-debug.log
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! answer-searning-mini-program@1.0.0 dev:weapp: `npm run build:weapp -- --watch`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the answer-searning-mini-program@1.0.0 dev:weapp script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
```

### npm 日志
```
0 info it worked if it ends with ok
1 verbose cli [
1 verbose cli   '/usr/local/bin/node',
1 verbose cli   '/Users/wangshuxian/.npm-global/bin/npm',
1 verbose cli   'run',
1 verbose cli   'dev:weapp'
1 verbose cli ]
2 info using npm@6.14.4
3 info using node@v13.12.0
4 verbose run-script [ 'predev:weapp', 'dev:weapp', 'postdev:weapp' ]
5 info lifecycle answer-searning-mini-program@1.0.0~predev:weapp: answer-searning-mini-program@1.0.0
6 info lifecycle answer-searning-mini-program@1.0.0~dev:weapp: answer-searning-mini-program@1.0.0
7 verbose lifecycle answer-searning-mini-program@1.0.0~dev:weapp: unsafe-perm in lifecycle true
8 verbose lifecycle answer-searning-mini-program@1.0.0~dev:weapp: PATH: /Users/wangshuxian/.npm-global/lib/node_modules/npm/node_modules/npm-lifecycle/node-gyp-bin:/Users/wangshuxian/office/answer-searning-mini-program/node_modules/.bin:/Library/Frameworks/Python.framework/Versions/3.7/bin:/Users/wangshuxian/.npm-global/bin:/Users/wangshuxian/.npm-global/bin:/usr/local/opt/libxml2/bin:/usr/local/opt/sqlite/bin:/usr/local/opt/openssl/bin:/Users/wangshuxian/code/flutter/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Frameworks/Python.framework/Versions/3.7/bin:/Users/wangshuxian/.npm-global/bin:/usr/local/opt/libxml2/bin:/usr/local/opt/sqlite/bin:/usr/local/opt/openssl/bin:/Users/wangshuxian/code/flutter/bin:/Users/wangshuxian/Library/Android/sdk/tools:/Users/wangshuxian/Library/Android/sdk/platform-tools:/Users/wangshuxian/.rvm/bin:/Users/wangshuxian/Library/Android/sdk/tools:/Users/wangshuxian/Library/Android/sdk/platform-tools:/Users/wangshuxian/.rvm/bin:/Users/wangshuxian/.rvm/bin
9 verbose lifecycle answer-searning-mini-program@1.0.0~dev:weapp: CWD: /Users/wangshuxian/office/answer-searning-mini-program
10 silly lifecycle answer-searning-mini-program@1.0.0~dev:weapp: Args: [ '-c', 'npm run build:weapp -- --watch' ]
11 silly lifecycle answer-searning-mini-program@1.0.0~dev:weapp: Returned: code: 1  signal: null
12 info lifecycle answer-searning-mini-program@1.0.0~dev:weapp: Failed to exec dev:weapp script
13 verbose stack Error: answer-searning-mini-program@1.0.0 dev:weapp: `npm run build:weapp -- --watch`
13 verbose stack Exit status 1
13 verbose stack     at EventEmitter.<anonymous> (/Users/wangshuxian/.npm-global/lib/node_modules/npm/node_modules/npm-lifecycle/index.js:332:16)
13 verbose stack     at EventEmitter.emit (events.js:315:20)
13 verbose stack     at ChildProcess.<anonymous> (/Users/wangshuxian/.npm-global/lib/node_modules/npm/node_modules/npm-lifecycle/lib/spawn.js:55:14)
13 verbose stack     at ChildProcess.emit (events.js:315:20)
13 verbose stack     at maybeClose (internal/child_process.js:1026:16)
13 verbose stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:286:5)
14 verbose pkgid answer-searning-mini-program@1.0.0
15 verbose cwd /Users/wangshuxian/office/answer-searning-mini-program
16 verbose Darwin 17.7.0
17 verbose argv "/usr/local/bin/node" "/Users/wangshuxian/.npm-global/bin/npm" "run" "dev:weapp"
18 verbose node v13.12.0
19 verbose npm  v6.14.4
20 error code ELIFECYCLE
21 error errno 1
22 error answer-searning-mini-program@1.0.0 dev:weapp: `npm run build:weapp -- --watch`
22 error Exit status 1
23 error Failed at the answer-searning-mini-program@1.0.0 dev:weapp script.
23 error This is probably not a problem with npm. There is likely additional logging output above.
24 verbose exit [ 1, true ]

```

