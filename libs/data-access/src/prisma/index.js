'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __exportStar =
  (this && this.__exportStar) ||
  function (m, exports) {
    for (var p in m)
      if (p !== 'default' && !Object.prototype.hasOwnProperty.call(exports, p))
        __createBinding(exports, m, p);
  };
exports.__esModule = true;
var client_1 = require('@prisma/client');
__exportStar(require('@prisma/client'), exports);
var prisma;
if (process.env.NODE_ENV === 'production') {
  prisma = new client_1.PrismaClient({
    errorFormat: 'minimal',
  });
} else {
  // @ts-ignore
  globalThis['prisma'] =
    globalThis['prisma'] ||
    new client_1.PrismaClient({
      errorFormat: 'pretty',
    });
  // @ts-ignore
  prisma = globalThis['prisma'];
}
exports['default'] = prisma;
