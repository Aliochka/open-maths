# open-maths

### Find and discuss open math problems

The aim of the project is to provide a website for browsing and discussing open mathematical problems.

It is aimed at researchers, students and anyone who is curious, loves mathematics or needs it.

Perhaps a student can use it to find his next subject, or a researcher can document the problems he has just encountered, someone from another science explain a problem specific to his discipline...

- each problem has its own page providing usefull information
- we can discuss a problem on its page
- it provides an easy way to navigate and find problems (search, categorization, field impacted...)

If ever I reach production, get users, get enough interesting data, I would like to make a public api to provide open data to whoever could be interested.

And after that... we can imagine all kind of great things !

### Disclaimer

This is a side project, I have another work and I can only work on holidays on it, maybe it will stay a Hello World project for ever,
at least it has a great readme now !

I'm **NOT a mathematician**, I just like maths and wanted to do something usefull and challenging. I will try my best to include them in the design process. For now I discuss early problems with my brother who study _weird mathematical stuff._

I'm french so my english is sometimes a little weirdo, fell free to ask me if you don't understand something.

### Licence / Open Source

the project is open source, under GPLv3, which mean you can freely use it for :

- Commercial use
- Modification
- Distribution
- Patent use
- Private use

with some conditions :

- Disclose source
- License and copyright notice
- Same license
- State changes

and some limitations :

- No liability
- No warranty

## Roadmap / Todo

### Stage 0

Stage 0 is the "oh ! it's just for fun" stage, it cost 0 €, it's about learning tools and setup a nice workflow

- [x] Git repo
- [x] Choose a licence
- [x] Readme
- [x] Todo list :)
- [ ] Maybe draw some design
- [ ] Make really basic project run in dev
  - [] Api (choose and install): adonisjs vs Fastify + Prisma + trpc
  - [x] Front (choose and install): basic vite + react
  - [x] Setup Monorepo (with pnpm workspace)
  - [x] Setup typescript
  - [x] Setup linter and choose rules
  - [x] Setup formatter and choose rules (with format on save !)
  - [ ] db
- [ ] Setup basic frontend
  - [ ] Routing
    - [x] Choose : react-router
    - [ ] Install
    - [ ] Setup with basic usage ready to integrate the rest
  - [ ] Form lib
    - [ ] Choose : react-hook-form
    - [ ] Validation : zod
    - [ ] Install
    - [ ] Create a basic form
  - [ ] Component library
  - [ ] CSS stuff
    - [ ] install
    - [ ] setup tool
    - [ ] make it responsive
    - [ ] style components
    - [ ] basic "global" style (for page)
  - [ ] Mandatory pages
    - [ ] Problem pages (read / create / edit)
    - [ ] All problems page
    - [ ] Way to reach me / how to contibute in the project (issues, ideas, ...)
    - [ ] a Home
    - [ ] User related pages ( ~~public~~ / private / create / edit)
  - [ ] Navigation Menu
  - [ ] accessibility good practices
- [ ] Setup basic api
  - [ ] link to db
  - [ ] link to front
  - [ ] Basic main features
    - [ ] User related
    - [ ] Problems related
  - [ ] Security rules
- [ ] quality
  - [ ] a running front test
  - [ ] a running basic api test (just a function)
  - [ ] a more complicated running api test (route + db)
  - [ ] a running e2e

### Stage 1

Stage 1 : is the "let see if it can be usefull" stage, it's about starting to share with others, it may cost a little

- [ ] find a public name
- [ ] buy a domain
- [ ] deploy project somewhere
- [ ] CI/CD
- [ ] reach some real users and gather feedback
- [ ] Design
- [ ] Invent a nice mathematic art direction
- [ ] Declined in ui
- [ ] Build the "minimum lovable" features
  - [ ] navigation through problems / data models
  - [ ] Math proof editor
- [ ] Find open data and populate the db

### Stages i++

We will see that later :)

## Dev

### Setup

- clone the project
- it use pnpm
- install dependancies : `pnpm i`
- start api & webapp in dev mode : `pnpm -r run dev`
- no database, nor env files for now :)

### pnpm commands

- lint everywhere (eslint) : `pnpm -r run lint`
- only run command on webapp : `pnpm --filter=webapp run dev`
- only run command on api : `pnpm --filter=api run dev`
