import { Starter } from "./index.js";

//#region src/rspack.d.ts
/**
* Rspack plugin
*
* @example
* ```js
* // rspack.config.js
* import Starter from 'unplugin-jdoss/rspack'
*
* export default {
*   plugins: [Starter()],
* }
* ```
*/
declare const rspack: typeof Starter.rspack;
//#endregion
export { rspack as default, rspack as "module.exports" };
//# sourceMappingURL=rspack.d.ts.map