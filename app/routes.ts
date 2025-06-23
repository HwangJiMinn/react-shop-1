import { index, prefix, route, type RouteConfig } from '@react-router/dev/routes';

// TODO: 경로 정의 (https://reactrouter.com/start/framework/routing)
export default [
  // * Pages

  route('/', 'routes/pages/index.tsx', [
    index('routes/pages/home.tsx'),
    route('fashion', 'routes/pages/Fashion.tsx'),
    route('accessory', 'routes/pages/accessory.tsx'),
    route('digital', 'routes/pages/digital.tsx'),
  ]),

  // * APIs
  ...prefix('api', [
    route('theme', 'routes/apis/theme.ts'),
    route('language', 'routes/apis/language.ts'),
  ]),
] satisfies RouteConfig;
