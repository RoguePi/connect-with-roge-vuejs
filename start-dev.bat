@echo off
echo Starting development server...
echo.
echo Website will open at: http://localhost:8080
echo Press Ctrl+C to stop
echo.
start http://localhost:8080
python -m http.server 8080
pause