import React, { useState } from 'react'
import Header from '../components/Header'
import Input from '../components/Input'
import { Pencil, Trash2, Check, X } from 'lucide-react'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')

  const addTask = (text) => {
    setTasks([...tasks, {
      id: Date.now(),
      text,
      completed: false
    }])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    ))
  }

  const startEdit = (task) => {
    setEditId(task.id)
    setEditText(task.text)
  }

  const saveEdit = (id) => {
    if (!editText.trim()) return

    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, text: editText.trim() }
        : task
    ))

    setEditId(null)
    setEditText('')
  }

  const completedCount = tasks.filter(task => task.completed).length

  return (
    <div className="parent overflow-y-auto rounded-2xl shadow-2xl">
      <Header />

      <div className="px-5 pt-2">
        <p className="text-sm text-gray-500 mb-2">
          {completedCount} of {tasks.length} tasks completed
        </p>

        <div className="h-2 w-full rounded-full bg-gray-200 mb-4">
          <div
            className="h-2 rounded-full bg-blue-500 transition-all"
            style={{
              width: `${tasks.length ? (completedCount / tasks.length) * 100 : 0}%`
            }}
          />
        </div>
      </div>

      <Input addTask={addTask} />

      <div className="px-5 pb-5 space-y-3">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-400 py-8">
            No tasks yet. Add your first task!
          </p>
        ) : (
          tasks.map(task => (
            <div
              key={task.id}
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm"
            >
              <button
                onClick={() => toggleComplete(task.id)}
                className={`h-6 w-6 shrink-0 rounded-full border flex items-center justify-center ${
                  task.completed
                    ? 'bg-green-500 border-green-500 text-white'
                    : 'border-gray-300 hover:border-green-500'
                }`}
                aria-label="Toggle task completion"
              >
                {task.completed && <Check size={15} />}
              </button>

              {editId === task.id ? (
                <input
                  autoFocus
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter') saveEdit(task.id)
                    if (e.key === 'Escape') setEditId(null)
                  }}
                  className="min-w-0 flex-1 rounded border p-2 outline-blue-500"
                />
              ) : (
                <span
                  className={`min-w-0 flex-1 break-words ${
                    task.completed
                      ? 'line-through text-gray-400'
                      : 'text-gray-700'
                  }`}
                >
                  {task.text}
                </span>
              )}

              {editId === task.id ? (
                <>
                  <button
                    onClick={() => saveEdit(task.id)}
                    className="text-green-600 hover:bg-green-50 rounded-lg p-2"
                    aria-label="Save edit"
                  >
                    <Check size={19} />
                  </button>

                  <button
                    onClick={() => setEditId(null)}
                    className="text-gray-500 hover:bg-gray-100 rounded-lg p-2"
                    aria-label="Cancel edit"
                  >
                    <X size={19} />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => startEdit(task)}
                    className="text-blue-500 hover:bg-blue-50 rounded-lg p-2"
                    aria-label="Edit task"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 hover:bg-red-50 rounded-lg p-2"
                    aria-label="Delete task"
                  >
                    <Trash2 size={18} />
                  </button>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default App