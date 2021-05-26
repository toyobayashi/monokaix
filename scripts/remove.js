const { homedir } = require('os')
const { join } = require('path')
const { rmSync, readdirSync } = require('fs')
const pkg = require('../package.json')

const vscodeUserExtensionDir = join(homedir(), '.vscode/extensions')
const ls = readdirSync(vscodeUserExtensionDir)
for (let i = 0; i < ls.length; i++) {
  const item = ls[i];
  if (item.startsWith(`${pkg.publisher}.monokaix`)) {
    try {
      rmSync(join(vscodeUserExtensionDir, item), { recursive: true, force: true })
    } catch (_) {
      throw new Error('rm failed')
    }
    console.log('Done.')
    process.exit(0)
  }
}
console.error('MonokaiX has not been installed yet.')
