:: npm install -g typescript
:: npm install -g ts-node
:: npm install -g tsx


@echo off

START tsx typescript_demo.ts



:: ALTERNATIVE:

:: START tsc typescript_demo.ts

:: ECHO COMPILATION STARTED!

:: TIMEOUT /T 3 >nul

:: node typescript_demo.js

:: ECHO RUNNING JS FILE!

:: PAUSE
