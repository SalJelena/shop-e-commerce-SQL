import express from 'express'

import { getNote, getNotes, createNote } from './database.js'

const app = express()

app.get('/notes', async (req, res) => {
    const notes = await getNotes()
    res.send(notes)
})

app.listen(8080, () => {
    console.log('Server running on port 8080')
})