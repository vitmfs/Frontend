@echo off

:: Start React app
START "React App" CMD /k "CD /d react-app && npm run dev"

:: Start Angular app
START "Angular App" CMD /k "CD /d angular-app && npm start"

REM Which AI tools do you want to configure with Angular best practices? https://angular.dev/ai/develop-with-ai
:: npm run storybook