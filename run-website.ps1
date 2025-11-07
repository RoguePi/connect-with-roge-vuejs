Write-Host "Starting Connect with Roge website..." -ForegroundColor Green
Write-Host ""
Write-Host "Opening browser at http://localhost:8080" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Red
Write-Host ""

Start-Process "http://localhost:8080"
python -m http.server 8080