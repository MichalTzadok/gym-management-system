import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  rootDir: './',

  // אם זה מוגדר, Jest ישתמש בהתמרת Babel
  preset: 'ts-jest',
  testEnvironment: 'node',

  // האם להציג תוצאות באופן מסודר
  verbose: true,
  // מעקב אחרי שינויים בקבצים
  watchman: true,
  // האם לאכוף מחדלים בקוד
//   strict: true,
  // איך להתמודד עם קבצי התבחן
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  // מה לא להתמודד עם התמרות
  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
};
export default config;
