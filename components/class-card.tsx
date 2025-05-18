"use client"

import type React from "react"

import { useState } from "react"
import { Activity, Clock, Dumbbell, Users, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ClassCardProps {
  title: string
  description: string
  duration: string
  price: string
  type: "personal" | "hiit" | "strength" | "yoga" | "cardio" | "core"
  onSelect?: () => void
}

export function ClassCard({ title, description, duration, price, type, onSelect }: ClassCardProps) {
  const [selected, setSelected] = useState(false)

  const getIcon = () => {
    switch (type) {
      case "personal":
        return <User className="h-5 w-5" />
      case "hiit":
        return <Activity className="h-5 w-5" />
      case "strength":
        return <Dumbbell className="h-5 w-5" />
      case "yoga":
        return <Users className="h-5 w-5" />
      case "cardio":
        return <Activity className="h-5 w-5" />
      case "core":
        return <Dumbbell className="h-5 w-5" />
      default:
        return <Dumbbell className="h-5 w-5" />
    }
  }

  const handleSelect = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelected(!selected)
    if (onSelect && !selected) {
      onSelect()
    }
  }

  return (
    <Card
      className={cn(
        "transition-all duration-200 cursor-pointer",
        selected ? "border-2 border-teal-600 shadow-md" : "hover:border-teal-200",
      )}
      onClick={() => {
        setSelected(!selected)
        if (onSelect && !selected) {
          onSelect()
        }
      }}
    >
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700">
              {getIcon()}
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          <div className="text-lg font-bold text-teal-600">{price}</div>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{duration}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant={selected ? "default" : "outline"}
          className={cn("w-full", selected ? "bg-teal-600 hover:bg-teal-700" : "")}
          onClick={handleSelect}
        >
          {selected ? "Selected" : "Select Class"}
        </Button>
      </CardFooter>
    </Card>
  )
}
