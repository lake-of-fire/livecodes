/* eslint-disable camelcase */

export interface Pen {
  baseUrl: string;
  title: string;
  autoupdate: boolean;
  update_delay: number;
  autosave: boolean;
  emmet: boolean;

  autoprefixer: boolean;

  mode: 'full' | 'editor' | 'codeblock' | 'result';
  language: Language;
  allow_lang_change: boolean;
  markup: Editor;
  style: Editor;
  script: Editor;
  stylesheets: string[];
  scripts: string[];
  editor: {
    [key: string]: any;
  };
  modules: Module[];
}

export type Language =
  | 'html'
  | 'htm'
  | 'markdown'
  | 'md'
  | 'mdown'
  | 'mkdn'
  | 'mdx'
  | 'pug'
  | 'jade'
  | 'asciidoc'
  | 'adoc'
  | 'asc'
  | 'css'
  | 'scss'
  | 'sass'
  | 'less'
  | 'stylus'
  | 'styl'
  | 'javascript'
  | 'js'
  | 'typescript'
  | 'ts'
  | 'jsx'
  | 'tsx'
  | 'coffeescript'
  | 'coffee';

export interface Editor {
  language: Language;
  content?: string;
  contentUrl?: string;
  selector?: string;
}

export type EditorId = 'markup' | 'style' | 'script';

export interface Editors {
  markup: any;
  style: any;
  script: any;
}
export interface EditorLanguages {
  markup: Language;
  style: Language;
  script: Language;
}

export interface Module {
  name: string;
  url?: string;
  typesUrl?: string;
}

export interface LanguageSpecs {
  name: Language;
  title: string;
  longTitle?: string;
  parser: ParserName;
  plugin: string;
  compiler?: Compiler | Language;
  extensions: Language[];
  editor: EditorId;
}

export interface Processors {
  name: ProcessorName | Language;
  compiler: Compiler | ProcessorName | Language;
  editors?: EditorId[];
}

export type ProcessorName = 'autoprefixer';

export type ParserName = 'babel' | 'html' | 'markdown' | 'css' | 'scss' | 'less';
export interface Parser {
  name: ParserName;
  plugin: any;
}

export interface EditorLibrary {
  filename: string;
  content: string;
}

export interface Compiler {
  url: string;
  fn?: (code: string, options?: any) => any;
  factory: (compilerModule: any, config: Pen) => (code: string) => string;
  stylesAdded?: boolean;
  umd?: boolean;
  editors?: EditorId[];
}

export interface Compilers {
  [language: string]: Compiler;
}
