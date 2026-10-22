# Builds the upload-ready website into the "site" folder from index.html, content.js and img\.
# Run it again after any change to the page or content:
#
#   powershell -ExecutionPolicy Bypass -File build.ps1
#   powershell -ExecutionPolicy Bypass -File build.ps1 -Domain https://hardikkhurana.com
#
# -Domain is optional. Once you have your address, pass it so link previews
# (LinkedIn, WhatsApp, X) can find the preview image and search engines know the main URL.
param([string]$Domain = "")
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$src = [IO.File]::ReadAllText((Join-Path $PSScriptRoot "index.html"), [Text.Encoding]::UTF8)
$split = $src.IndexOf('<a class="skip"')
if ($split -lt 0) { throw "Couldn't find where the page body starts in index.html" }
$headPart = $src.Substring(0, $split) -replace '<meta name="claude:viewport-fit-sides"[^>]*>\r?\n?', ''
$bodyPart = $src.Substring($split)

$Domain = $Domain.TrimEnd('/')
$ogImage = if ($Domain) { "$Domain/img/og.jpg" } else { "img/og.jpg" }
$canonical = if ($Domain) { "<link rel=`"canonical`" href=`"$Domain/`">`n<meta property=`"og:url`" content=`"$Domain/`">`n" } else { "" }

$head = @"
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%2308061c'/%3E%3Cpolygon fill='%23c6ff1a' points='50,10 56,40 88,30 64,50 88,70 56,60 50,90 44,60 12,70 36,50 12,30 44,40'/%3E%3C/svg%3E">
<meta property="og:image" content="$ogImage">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
$canonical
"@

$out = Join-Path $PSScriptRoot "site"
if (Test-Path $out) { Remove-Item -Recurse -Force $out }
New-Item -ItemType Directory $out | Out-Null
$enc = New-Object Text.UTF8Encoding $false
[IO.File]::WriteAllText((Join-Path $out "index.html"), $head + $headPart + "</head>`n<body>`n" + $bodyPart + "`n</body>`n</html>`n", $enc)
Copy-Item (Join-Path $PSScriptRoot "content.js") $out
Copy-Item (Join-Path $PSScriptRoot "img") $out -Recurse
$robots = "User-agent: *`nAllow: /`n"
if ($Domain) { $robots += "Sitemap: $Domain/sitemap.xml`n"; [IO.File]::WriteAllText((Join-Path $out "sitemap.xml"), "<?xml version=`"1.0`" encoding=`"UTF-8`"?>`n<urlset xmlns=`"http://www.sitemaps.org/schemas/sitemap/0.9`"><url><loc>$Domain/</loc></url></urlset>`n", $enc) }
[IO.File]::WriteAllText((Join-Path $out "robots.txt"), $robots, $enc)

$files = Get-ChildItem -Recurse -File $out
"Built site/: {0} files, {1:N1} MB{2}" -f $files.Count, (($files | Measure-Object Length -Sum).Sum / 1MB), $(if ($Domain) { " for $Domain" } else { " (no domain set yet)" })
