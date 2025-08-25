#!/usr/bin/env bun
import { prisma } from './prisma.js'

async function createTodo(text: string) {
  const created = await prisma.todo.create({ data: { text } })
  console.log(`[createTodo] Created todo (${created.id}): ${created.text}`)
}

async function listTodos() {
  const todos = await prisma.todo.findMany()
  console.log(`[listTodos] (${todos.length}):`)
  for (const todo of todos) {
    console.log(`[listTodos] -> ${todo.text} (${todo.done ? 'done' : 'not done'})}`)
  }
}

// Do whatever data mangling you want here to verify your model
await createTodo(`Todo: ${new Date().toISOString()}`)
await listTodos()
