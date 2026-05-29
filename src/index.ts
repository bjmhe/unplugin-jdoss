import UploadOssPlugin from "@jd/upload-oss-tools";
import { createUnplugin, type UnpluginInstance } from "unplugin";

export interface Options {
  /** 被上传的本地绝对路径，自行配置 例如: path.resolve(workspaceRoot, "dist") */
  localFullPath: string;

  /** http://oss.jd.com/user/glist 生成的 access key */
  access: string;

  /** http://oss.jd.com/user/glist 生成的 secret key */
  secret: string;

  /**
   * 远程 oss 路径 非必填，默认 storage.jd.local 可选值: - 中国: storage.jd.local - 印尼: storage-local.jd.id - 泰国:
   * storage.jd.th.local - 测试: test.storage.jd.com
   */
  site: string;

  /** 是否覆盖远程空间文件 默认 true */
  cover: boolean;

  /** 上传请求超时的毫秒数 单位毫秒，默认 30000 (30秒) */
  timeout: string | number;

  /** 是否手动刷新cdn文件 默认 false */
  printCdnFile: boolean;

  /** 空间名字 仅能由小写字母、数字、点号(.)、中划线(-)组成 */
  bucket: string;

  /** 空间文件夹名称 非必填 1. 默认创建当前文件所在的文件夹 2. 屏蔽字段或传undefined则按照localFullPath的路径一层层创建文件夹 */
  folder: string;

  /** 排除的文件规则 直接写正则不加双引号，无规则时空字符串 正则字符串，匹配到的文件和文件夹都会忽略 */
  ignoreRegexp: string;

  /** 自定义请求头 非必填 例如: { "Cache-Control": "max-age=31536000" } */
  customHeaders?: Record<string, string>;
}

export const Starter: UnpluginInstance<Options, false> = createUnplugin((options) => {
  const name = "unplugin-jdoss";
  return {
    name,
    writeBundle() {
      // @ts-ignore
      const _ploadOssPlugin = new UploadOssPlugin(options);
      _ploadOssPlugin.upload();
    },
  };
});
