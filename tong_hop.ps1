
# script: tong_hop.ps1
# Tac Gia: Bui Tan Khiem 
# Ngay Tao: 11-11-2026
 Write-Host "Dang tao bao cao..."
"=== BAO CAO SU CO WEBSITE ===" >  logs/tong_hop.txt
Get-Content logs/access.log | Select-String "status=403" >> logs/tong_hop.txt
Get-Content logs/access.log | Select-String "status=503" | measure-object >> logs/tong_hop.txt
Write-Host "Hoan thanh!"


