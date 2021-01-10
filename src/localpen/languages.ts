import { EditorId, Language, LanguageSpecs, Pen, Processors } from './models';

export const languages: LanguageSpecs[] = [
  {
    name: 'html',
    title: 'HTML',
    parser: 'html',
    plugin: './assets/prettier-html.js',
    extensions: ['html', 'htm'],
    editor: 'markup',
  },
  {
    name: 'pug',
    title: 'Pug',
    parser: 'babel',
    plugin: './assets/prettier-babel.js',
    compiler: {
      url: '/vendor/pug/pug.min.js',
      factory: () => (window as any).pug.render,
      umd: true,
    },
    extensions: ['pug', 'jade'],
    editor: 'markup',
  },
  {
    name: 'markdown',
    title: 'Markdown',
    parser: 'markdown',
    plugin: './assets/prettier-markdown.js',
    compiler: {
      url: '/vendor/marked/marked.esm.min.js',
      factory: (module: any) => module.default,
      stylesAdded: false,
    },
    extensions: ['md', 'markdown', 'mdown', 'mkdn', 'mdx'],
    editor: 'markup',
  },
  {
    name: 'asciidoc',
    title: 'AsciiDoc',
    parser: 'babel',
    plugin: './assets/prettier-babel.js',
    compiler: {
      url: '/vendor/asciidoctor/asciidoctor.min.js',
      factory: () => {
        const asciidoctor = (window as any).Asciidoctor();
        return asciidoctor.convert.bind(asciidoctor);
      },
      umd: true,
    },
    extensions: ['adoc', 'asciidoc', 'asc'],
    editor: 'markup',
  },
  {
    name: 'css',
    title: 'CSS',
    parser: 'css',
    plugin: './assets/prettier-postcss.js',
    extensions: ['css'],
    editor: 'style',
  },
  {
    name: 'scss',
    title: 'SCSS',
    parser: 'scss',
    plugin: './assets/prettier-postcss.js',
    compiler: {
      url: '/vendor/sass.js/sass.js',
      factory: (module: any, config: Pen) => module.createCompile(config),
    },
    extensions: ['scss'],
    editor: 'style',
  },
  {
    name: 'sass',
    title: 'Sass',
    parser: 'scss',
    plugin: './assets/prettier-postcss.js',
    compiler: 'scss',
    extensions: ['sass'],
    editor: 'style',
  },
  {
    name: 'less',
    title: 'Less',
    parser: 'less',
    plugin: './assets/prettier-postcss.js',
    compiler: {
      url: '/vendor/less/less.js',
      factory: (render: any) => render,
    },
    extensions: ['less'],
    editor: 'style',
  },
  {
    name: 'stylus',
    title: 'Stylus',
    parser: 'less',
    plugin: './assets/prettier-postcss.js',
    compiler: {
      url: '/vendor/stylus/stylus.min.js',
      factory: () => (window as any).stylus.render,
      umd: true,
    },
    extensions: ['styl'],
    editor: 'style',
  },
  {
    name: 'javascript',
    title: 'JS',
    longTitle: 'JavaScript',
    parser: 'babel',
    plugin: './assets/prettier-babel.js',
    extensions: ['js'],
    editor: 'script',
  },
  {
    name: 'typescript',
    title: 'TS',
    longTitle: 'TypeScript',
    parser: 'babel',
    plugin: './assets/prettier-babel.js',
    compiler: {
      url: '/vendor/typescript/typescript.min.js',
      factory: (module: any) => module.transpile,
    },
    extensions: ['ts'],
    editor: 'script',
  },
  {
    name: 'jsx',
    title: 'JSX',
    parser: 'babel',
    plugin: './assets/prettier-babel.js',
    compiler: 'typescript',
    extensions: ['jsx'],
    editor: 'script',
  },
  {
    name: 'tsx',
    title: 'TSX',
    parser: 'babel',
    plugin: './assets/prettier-babel.js',
    compiler: 'typescript',
    extensions: ['tsx'],
    editor: 'script',
  },
  {
    name: 'coffeescript',
    title: 'Coffee',
    longTitle: 'CoffeeScript',
    parser: 'babel',
    plugin: './assets/prettier-babel.js',
    compiler: {
      url: '/vendor/coffeescript/coffeescript.js',
      factory: () => (window as any).CoffeeScript.compile,
      umd: true,
    },
    extensions: ['coffee'],
    editor: 'script',
  },
];

export const postProcessors: Processors[] = [
  {
    name: 'autoprefixer',
    compiler: {
      url: '/vendor/autoprefixer/autoprefixer.js',
      factory: (module: any) => {
        const { postcss, autoprefixer } = module;
        const postcss1 = postcss([autoprefixer({ overrideBrowserslist: ['last 4 version'] })]);
        return postcss1.process.bind(postcss1);
      },
    },
    editors: ['style'],
  },
];

export const getLanguageByAlias = (alias: string): Language | undefined => {
  const aliasLowerCase = alias?.toLowerCase();
  return languages.find(
    (language) =>
      language.name === aliasLowerCase ||
      language.title.toLowerCase() === aliasLowerCase ||
      language.extensions.map((ext) => ext.toLowerCase()).includes(aliasLowerCase),
  )?.name;
};

export const getLanguageEditorId = (alias: Language): EditorId | undefined =>
  languages.find((lang) => lang.name === getLanguageByAlias(alias))?.editor;

export const getLanguageExtension = (alias: string): Language | undefined =>
  languages.find((lang) => lang.name === getLanguageByAlias(alias))?.extensions[0];
