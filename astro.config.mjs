import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  integrations: [react()]
});


// export default defineConfig({
//   site: 'https://astronaut.github.io',
//   base: '/my-repo',
// })