@echo off
setlocal

cd /d "%~dp0.."

echo Running lint...
call pnpm lint
if errorlevel 1 exit /b 1

echo Running build...
call pnpm build
if errorlevel 1 exit /b 1

echo OK

