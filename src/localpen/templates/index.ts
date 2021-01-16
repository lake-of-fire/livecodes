import { angularStarter } from './angular-starter';
import { blank } from './blank';
import { bootstrapStarter } from './bootstrap-starter';
import { jqueryStarter } from './jquery-starter';
import { preactStarter } from './preact-starter';
import { reactStarter } from './react-starter';
import { tailwindcssStarter } from './tailwindcss-starter';
import { typescriptStarter } from './typescript-starter';
import { vueStarter } from './vue-starter';

export const starterTemplates = [
  blank,
  typescriptStarter,
  reactStarter,
  vueStarter,
  angularStarter,
  preactStarter,
  jqueryStarter,
  bootstrapStarter,
  tailwindcssStarter,
];
