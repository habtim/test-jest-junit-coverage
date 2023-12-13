# Motivation
Following different articles found on web, it should be possible to include code coverage results within junit reports, see:
- https://elisegev.medium.com/running-tests-and-creating-code-coverage-reports-for-react-nodejs-project-continuously-with-60312b6a2dd0
- https://stackoverflow.com/questions/55002587/is-there-a-way-to-generate-jest-istanbul-coverage-report-in-junit-xml-format

# Getting started

- Run `pnpm i`
- Run `pnpm run test`

# Expected Result
Generated junit.xml include coverage reports

# Actual Result
No coverage reports available within junit report.

```
<?xml version="1.0" encoding="UTF-8"?>
<testsuites name="jest tests" tests="1" failures="0" errors="0" time="0.901">
  <testsuite name="src\sum.spec.ts" errors="0" failures="0" skipped="0" timestamp="2023-12-13T14:29:57" time="0.774" tests="1">
    <testcase classname="sum should sum two numbers" name="sum should sum two numbers" time="0.002">
    </testcase>
  </testsuite>
</testsuites>
```

Logs:
```
$ pnpm run test

> jest-junit-coverage-node@1.0.0 test C:\code\test\jest-junit-coverage-node
> jest

ts-jest[config] (WARN) message TS151001: If you have issues related to imports, you should consider 
setting `esModuleInterop` to `true` in your TypeScript configuration file (usually `tsconfig.json`). See https://blogs.msdn.microsoft.com/typescript/2018/01/31/announcing-typescript-2-7/#easier-ecmascript-module-interoperability for more information.
 PASS  src/sum.spec.ts
  sum
    √ should sum two numbers (2 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 | 
 sum.ts   |     100 |      100 |     100 |     100 | 
----------|---------|----------|---------|---------|-------------------

=============================== Coverage summary ===============================
Statements   : 100% ( 2/2 )
Branches     : 100% ( 0/0 )
Functions    : 100% ( 1/1 )
Lines        : 100% ( 2/2 )
================================================================================
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.834 s, estimated 2 s
Ran all test suites.
```
