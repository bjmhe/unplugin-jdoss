import { Starter } from "./index.js";

//#region src/farm.d.ts
/**
* Farm plugin
*
* @example
* ```ts
* // farm.config.js
* import Starter from 'unplugin-jdoss/farm'
*
* export default {
*   plugins: [Starter()],
* }
* ```
*/
declare const farm: typeof Starter.farm;
//#endregion
export { farm as default, farm as "module.exports" };
//# sourceMappingURL=farm.d.ts.map