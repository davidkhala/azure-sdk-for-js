param (
  [Parameter(mandatory = $true)]
  $originalDistTags,
  [Parameter(mandatory = $true)]
  $intendedTag,
  [Parameter(mandatory = $true)]
  $intendedTagVersion,
  [Parameter(mandatory = $true)]
  $packageJson
)

$ErrorActionPreference = 'Stop'
$PSNativeCommandUseErrorActionPreference = $true

$pkg = Get-Content -Raw $packageJson | ConvertFrom-Json
$packageName = $pkg.Name

Write-Host "Verify npm tag versions for package $packageName"

$parsedOriginalDistTags = $originalDistTags | ConvertFrom-Json

$npmPkgProp = npm view $packageName --json | ConvertFrom-Json
$packageDistTags = $npmPkgProp."dist-tags"

Write-Host "Original dist-tag: $parsedOriginalDistTags"
Write-Host "Current dist-tag: $packageDistTags"
Write-Host "Intend to add tag $intendedTag to version $intendedTagVersion"

if ($packageDistTags."$intendedTag" -ne $intendedTagVersion) {
  Write-Warning "Tag not correctly set, current $intendedTag tag is version $($packageDistTags."$intendedTag") instead of $intendedTagVersion."
  $correctDistTags = $parsedOriginalDistTags
  $correctDistTags."$intendedTag" = $intendedTagVersion
  Write-Host "Setting AuthToken Deployment"
  $regAuth = "//registry.npmjs.org/"
  npm config set $regAuth`:_authToken=`$`{azure-sdk-npm-token`}
  foreach($tag in $correctDistTags.PSObject.Properties) {
    Write-Host "npm dist-tag add $packageName@$($tag.value) $($tag.Name)"
    npm dist-tag add $packageName@$($tag.value) $($tag.Name)
  }
  $npmPkgProp = npm view $packageName --json | ConvertFrom-Json
  $packageDistTags = $npmPkgProp."dist-tags"
  Write-Host "Corrected dist tags to: $packageDistTags"
} else {
  Write-Host "Tag verified."
}
