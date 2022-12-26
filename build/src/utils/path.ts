import { resolve } from "path";

// root path
export const projRoot = resolve(__dirname, "..", "..", "..");

// packages project path
export const pkgRoot = resolve(projRoot, "packages");
export const compRoot = resolve(pkgRoot, "components");
export const themeRoot = resolve(pkgRoot, "themes");
export const hookRoot = resolve(pkgRoot, "hooks");
export const localeRoot = resolve(pkgRoot, "tokens");
export const directiveRoot = resolve(pkgRoot, "directives");
export const utilRoot = resolve(pkgRoot, "utils");

// buid project path
export const buildRoot = resolve(projRoot, "internal", "build");

// Docs
export const docsDirName = "docs";
export const docRoot = resolve(projRoot, docsDirName);
export const vpRoot = resolve(docRoot, ".vitepress");

/** `/dist` */
export const buildOutput = resolve(projRoot, "dist");
export const buildFullRoot = resolve(buildOutput, "buildFull");
export const buildFullComponentRoot = resolve(buildFullRoot, "component");
export const buildFullCssRoot = resolve(buildFullRoot, "css");
export const buildModuleRoot = resolve(buildOutput, "buildModule");
export const buildModuleComponentRoot = resolve(buildModuleRoot, "component");
export const buildThemeRoot = resolve(buildOutput, "theme");


export const projPackage = resolve(projRoot, "package.json");
export const compPackage = resolve(compRoot, "package.json");
export const themePackage = resolve(themeRoot, "package.json");
export const hookPackage = resolve(hookRoot, "package.json");
export const localePackage = resolve(localeRoot, "package.json");
export const directivePackage = resolve(directiveRoot, "package.json");
export const utilPackage = resolve(utilRoot, "package.json");
export const docPackage = resolve(docRoot, "package.json");
