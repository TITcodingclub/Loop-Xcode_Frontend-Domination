"use client"

import type React from "react"

import { useState } from "react"
import { Clock, Scale, Thermometer } from "lucide-react"

interface PrepItem {
  id: string
  title: string
  type: "ingredient" | "step"
  icon: string
  time?: string
  amount?: string
}

interface Column {
  id: string
  title: string
  items: PrepItem[]
}

export default function PrepBoard() {
  const [columns, setColumns] = useState<Column[]>([
    {
      id: "to-prep",
      title: "To Prep",
      items: [
        { id: "1", title: "Dice onions", type: "step", icon: "🧅", time: "5 min" },
        { id: "2", title: "Marinate chicken", type: "step", icon: "🍗", time: "30 min" },
        { id: "3", title: "Wash vegetables", type: "step", icon: "🥬", time: "3 min" },
        { id: "4", title: "Measure spices", type: "ingredient", icon: "🧂", amount: "2 tsp" },
      ],
    },
    {
      id: "prepping",
      title: "Prepping",
      items: [{ id: "5", title: "Chopping garlic", type: "step", icon: "🧄", time: "2 min" }],
    },
    {
      id: "done",
      title: "Done",
      items: [
        { id: "6", title: "Preheat oven", type: "step", icon: "🔥", time: "10 min" },
        { id: "7", title: "Olive oil", type: "ingredient", icon: "🫒", amount: "3 tbsp" },
      ],
    },
  ])

  const [draggedItem, setDraggedItem] = useState<PrepItem | null>(null)

  const handleDragStart = (item: PrepItem) => {
    setDraggedItem(item)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault()
    if (!draggedItem) return

    setColumns((prev) => {
      const newColumns = [...prev]

      // Remove item from source column
      newColumns.forEach((column) => {
        column.items = column.items.filter((item) => item.id !== draggedItem.id)
      })

      // Add item to target column
      const targetColumn = newColumns.find((col) => col.id === targetColumnId)
      if (targetColumn) {
        targetColumn.items.push(draggedItem)
      }

      return newColumns
    })

    setDraggedItem(null)
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "ingredient":
        return <Scale className="h-4 w-4" />
      case "step":
        return <Clock className="h-4 w-4" />
      default:
        return <Thermometer className="h-4 w-4" />
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {columns.map((column) => (
        <div
          key={column.id}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg min-h-96"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, column.id)}
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{column.title}</h3>

          <div className="space-y-3">
            {column.items.map((item) => (
              <div
                key={item.id}
                draggable
                onDragStart={() => handleDragStart(item)}
                className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-xl cursor-move hover:shadow-md hover:scale-105 transition-all duration-300 border border-orange-200 dark:border-gray-500"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{item.icon}</span>
                    {getIcon(item.type)}
                  </div>
                  {item.time && (
                    <span className="text-xs bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 px-2 py-1 rounded-full">
                      {item.time}
                    </span>
                  )}
                  {item.amount && (
                    <span className="text-xs bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                      {item.amount}
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
