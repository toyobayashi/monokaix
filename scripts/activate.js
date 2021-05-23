const { homedir } = require('os')
const { join } = require('path')
const { mkdirSync, copyFileSync } = require('fs')

const vscodeUserExtensionDir = join(homedir(), '.vscode/extensions')
const themeDir = join(vscodeUserExtensionDir, 'monokaix')
mkdirp(themeDir)
copyFileSync(join(__dirname, '../package.json'), join(themeDir, 'package.json'))
mkdirp(join(themeDir, 'themes'))
copyFileSync(join(__dirname, '../themes/monokaix-color-theme.json'), join(themeDir, './themes/monokaix-color-theme.json'))
console.log('Done.')

function mkdirp (dir) {
  try {
    mkdirSync(dir, { recursive: true })
  } catch (_) {
    console.error('mkdir failed')
  }
}
