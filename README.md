# next-app-router-as-ssg

```
> next build

   ▲ Next.js 15.1.6

   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Linting and checking validity of types
 ✓ Collecting page data
 ✓ Generating static pages (9/9)
 ✓ Collecting build traces
 ✓ Exporting (3/3)
 ✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    142 B           106 kB
├ ○ /_not-found                          979 B           106 kB
├ ○ /about                               142 B           106 kB
└ ● /posts/[path]                        142 B           106 kB
    ├ /posts/hello
    ├ /posts/world
    └ /posts/export
+ First Load JS shared by all            105 kB
  ├ chunks/4bd1b696-20882bf820444624.js  52.9 kB
  ├ chunks/517-8339dfdf94467857.js       50.5 kB
  └ other shared chunks (total)          1.88 kB


○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses generateStaticParams)
```
