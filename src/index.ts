import { createUnplugin, type UnpluginInstance } from 'unplugin'
import { resolveOptions, type Options } from './core/options'

const UploadOssPlugin = require("@jd/upload-oss-tools");

export const Starter: UnpluginInstance<Options | undefined, false> =
  createUnplugin((rawOptions = {}) => {
    const options = resolveOptions(rawOptions)

    const name = 'unplugin-jdoss'
    return {
      name,
      writeBundle() {
        const _ploadOssPlugin = new UploadOssPlugin(options)
        _ploadOssPlugin.upload();
      }
    }
  })
