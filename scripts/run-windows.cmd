@echo off
setlocal

rem Run from repo root even if invoked elsewhere.
cd /d "%~dp0.."

echo Installing dependencies...
call pnpm install
if errorlevel 1 exit /b 1

echo Starting dev server...
call pnpm dev

