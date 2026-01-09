// src/server.ts
import { app } from './app'   // import app instance
import cors from '@elysiajs/cors'
import { FolderService } from './modules/folder/folder.service'

// ✨ GLOBAL CORS
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

// 🌲 Routes
app.get('/api/v1/folders/tree', async () => {
    return FolderService.getFolderTree()
})

app.get('/api/v1/folders/:id/children', async ({ params }) => {
    const id = Number(params.id)
    return FolderService.getDirectChildren(id)
})

app.get('/api/v1/folders/:id/path', async ({ params }) => {
  const id = Number(params.id)
  return FolderService.getFolderPath(id)
})

app.listen(3000)
console.log('Backend running at http://localhost:3000')
