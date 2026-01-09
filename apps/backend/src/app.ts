import { Elysia } from 'elysia'

export const app = new Elysia()
  .get('/', () => ({
    status: 'Windows-Exploler API Status OK! 🚀'
  }))
