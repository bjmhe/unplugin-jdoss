import { Starter } from "./index.js";

//#region src/vite.d.ts
/**
 * Vite plugin
 *
 * @example
 * ```ts
 * // vite.config.ts
 * import Starter from 'unplugin-jdoss/vite'
 *
 * export default defineConfig({
 *   plugins: [Starter()],
 * })
 * ```
 */
declare const vite: typeof Starter.vite;
//#endregion
export { vite as default, vite as "module.exports" };
//# sourceMappingURL=vite.d.ts.map