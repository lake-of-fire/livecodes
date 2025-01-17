import type { LanguageSpecs } from '../models';
import { asciidoc } from './asciidoc';
import { babel } from './babel';
import { css } from './css';
import { haml } from './haml';
import { html } from './html';
import { javascript } from './javascript';
import { jsx, tsx } from './jsx';
import { less } from './less';
import { markdown } from './markdown';
import { mdx } from './mdx';
import { pug } from './pug';
import { scss, sass } from './scss';
import { svelte } from './svelte';
import { stylus } from './stylus';
import { typescript } from './typescript';
import { vue } from './vue';
import { vue2 } from './vue2';
import { stencil } from './stencil';
import { coffeescript } from './coffeescript';
import { livescript } from './livescript';
import { assemblyscript } from './assemblyscript';
import { python } from './python';
import { ruby } from './ruby';
import { php } from './php';
import { perl } from './perl';
import { lua } from './lua';
import { scheme } from './scheme';
import { solid, solidTsx } from './solid';
import { pyodide } from './python-pyodide';
import { liquid } from './liquid';
import { ejs } from './ejs';
import { handlebars } from './handlebars';
import { dot } from './dot';
import { nunjucks } from './nunjucks';
import { go } from './go';
import { rescript } from './rescript';
import { reason } from './reason';
import { ocaml } from './ocaml';
import { wat } from './wat';
import { riot } from './riot';
import { sql } from './sql';
import { reactNative, reactNativeTsx } from './react-native';
import { blockly } from './blockly';
import { twig } from './twig';
import { astro } from './astro';
import { malina } from './malina';
import { commonlisp } from './commonlisp';
import { cpp } from './cpp';
import { julia } from './julia';
import { clang } from './cpp-clang';
import { tcl } from './tcl';
import { prolog } from './prolog';
import { clio } from './clio';
import { richtext } from './richtext';
import { diagrams } from './diagrams';
import { imba } from './imba';
import { mustache } from './mustache';
import { artTemplate } from './art-template';
import { r } from './r';
import { civet } from './civet';
import { fennel } from './fennel';
import { teal } from './teal';
import { stylis } from './stylis';
import { flow } from './flow';
import { mjml } from './mjml';
import { sucrase } from './sucrase';
import { eta } from './eta';
import { clojurescript } from './clojurescript';

export const languages: LanguageSpecs[] = [
  html,
  markdown,
  mdx,
  astro,
  pug,
  asciidoc,
  haml,
  mustache,
  handlebars,
  ejs,
  eta,
  nunjucks,
  liquid,
  dot,
  twig,
  artTemplate,
  mjml,
  diagrams,
  richtext,
  css,
  scss,
  sass,
  less,
  stylus,
  stylis,
  javascript,
  typescript,
  flow,
  babel,
  sucrase,
  jsx,
  tsx,
  reactNative,
  reactNativeTsx,
  vue,
  vue2,
  svelte,
  stencil,
  solid,
  solidTsx,
  riot,
  malina,
  coffeescript,
  livescript,
  civet,
  clio,
  imba,
  rescript,
  reason,
  ocaml,
  python,
  pyodide,
  r,
  ruby,
  go,
  php,
  cpp,
  clang,
  perl,
  lua,
  teal,
  fennel,
  julia,
  scheme,
  commonlisp,
  clojurescript,
  tcl,
  assemblyscript,
  wat,
  sql,
  prolog,
  blockly,
];
