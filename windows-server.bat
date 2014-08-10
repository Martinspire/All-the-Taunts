@echo off
set here=%cd%
@echo cd-ing to %here%
cd %here%
for /f "tokens=3" %%i in ('ping %computername% -4 -n 1 ^| findstr Reply') do (echo Connect to http://%%i:8000)
@echo going to start server, press CTRL+C to stop...
pause
