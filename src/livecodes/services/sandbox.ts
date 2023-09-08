const serviceBaseUrl = 'codekit:///livecodes/sandbox';
const version = 'v7';

export const sandboxService = {
  getResultUrl: () => `${serviceBaseUrl}/${version}/`,
  getCompilerUrl: () => `${serviceBaseUrl}/${version}/compiler`,
  getOrigin: () => new URL(serviceBaseUrl).origin,
};
