import { Starter } from "./index.js";

//#region src/rolldown.d.ts
/**
 * Rolldown plugin
 *
 * @example
 * ```ts
 * // rolldown.config.js
 * import Starter from 'unplugin-jdoss/rolldown'
 *
 * export default {
 *   plugins: [Starter()],
 * }
 * ```
 */
declare const rolldown: typeof Starter.rolldown;
//#endregion
export { rolldown as default, rolldown as "module.exports" };
//# sourceMappingURL=rolldown.d.ts.map