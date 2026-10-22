# Builds the upload-ready website into the "site" folder from index.html, content.js and img\.
# Run it again after any change to the page or content:
#
#   powershell -ExecutionPolicy Bypass -File build.ps1
#   powershell -ExecutionPolicy Bypass -File build.ps1 -Domain https://hardikkhurana.com
#
# index.html is already a complete page, so this repo also works as-is on GitHub Pages.
# -Domain is optional. Once you have your address, pass it so link previews
# (LinkedIn, WhatsApp, X) can find the preview image and search engines know the main URL.
param([string]$Domain = "")
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$imgDir = Join-Path $PSScriptRoot "img"
if (-not (Test-Path $imgDir)) { throw "The img folder is missing next to build.ps1. Put your images in img\ first." }

# Check every image path in content.js exists with exactly the same capitals.
# Windows ignores capitals, but web hosts don't: "NF-27.jpg" and "nf-27.jpg" are different files online.
$content = [IO.File]::ReadAllText((Join-Path $PSScriptRoot "content.js"), [Text.Encoding]::UTF8)
$wanted = [regex]::Matches($content, '"(img/[^"]+)"') | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
$actual = Get-ChildItem -Recurse -File $imgDir | ForEach-Object { "img/" + $_.FullName.Substring($imgDir.Length + 1).Replace('\', '/') }
$problems = @()
foreach ($p in $wanted) {
  if ($actual -ccontains $p) { continue }
  $near = $actual | Where-Object { $_ -ieq $p } | Select-Object -First 1
  if ($near) { $problems += "  $p  (on disk as $near; rename it to match)" } else { $problems += "  $p  (missing)" }
}
if ($problems.Count) { Write-Warning ("These images won't show online:`n" + ($problems -join "`n")) }

$Domain = $Domain.TrimEnd('/')
$page = [IO.File]::ReadAllText((Join-Path $PSScriptRoot "index.html"), [Text.Encoding]::UTF8)
if ($Domain) {
  $page = $page.Replace('<meta property="og:image" content="img/og.jpg">', "<meta property=`"og:image`" content=`"$Domain/img/og.jpg`">")
  $page = $page.Replace('<!-- domain-tags -->', "<link rel=`"canonical`" href=`"$Domain/`">`n<meta property=`"og:url`" content=`"$Domain/`">")
}

$out = Join-Path $PSScriptRoot "site"
if (Test-Path $out) { Remove-Item -Recurse -Force $out }
New-Item -ItemType Directory $out | Out-Null
$enc = New-Object Text.UTF8Encoding $false
[IO.File]::WriteAllText((Join-Path $out "index.html"), $page, $enc)
Copy-Item (Join-Path $PSScriptRoot "content.js") $out
Copy-Item $imgDir $out -Recurse
$robots = "User-agent: *`nAllow: /`n"
if ($Domain) { $robots += "Sitemap: $Domain/sitemap.xml`n"; [IO.File]::WriteAllText((Join-Path $out "sitemap.xml"), "<?xml version=`"1.0`" encoding=`"UTF-8`"?>`n<urlset xmlns=`"http://www.sitemaps.org/schemas/sitemap/0.9`"><url><loc>$Domain/</loc></url></urlset>`n", $enc) }
[IO.File]::WriteAllText((Join-Path $out "robots.txt"), $robots, $enc)

$files = Get-ChildItem -Recurse -File $out
"Built site/: {0} files, {1:N1} MB{2}" -f $files.Count, (($files | Measure-Object Length -Sum).Sum / 1MB), $(if ($Domain) { " for $Domain" } else { " (no domain set yet)" })
