"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function BookingCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    // First day of the month
    const firstDay = new Date(year, month, 1)
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0)

    // Day of the week for the first day (0 = Sunday, 6 = Saturday)
    const firstDayOfWeek = firstDay.getDay()

    // Total days in the month
    const daysInMonth = lastDay.getDate()

    // Array to hold all calendar days
    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push({ date: null, isCurrentMonth: false })
    }

    // Add days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      days.push({
        date,
        isCurrentMonth: true,
        isToday: isSameDay(date, new Date()),
        isSelected: selectedDate ? isSameDay(date, selectedDate) : false,
        isAvailable: isDateAvailable(date),
      })
    }

    return days
  }

  // Check if two dates are the same day
  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    )
  }

  // Mock function to determine if a date has available slots
  const isDateAvailable = (date: Date) => {
    // For demo purposes, make weekends less available and some random weekdays unavailable
    const day = date.getDay()
    const dateNum = date.getDate()

    // Weekend (Saturday = 6, Sunday = 0)
    if (day === 0 || day === 6) {
      return dateNum % 3 !== 0 // Only some weekend days available
    }

    // Make some weekdays unavailable (for demo)
    return dateNum % 7 !== 0
  }

  // Navigate to previous month
  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  // Navigate to next month
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  // Handle date selection
  const handleDateClick = (day: { date: Date | null; isCurrentMonth: boolean; isAvailable?: boolean }) => {
    if (day.date && day.isCurrentMonth && day.isAvailable) {
      setSelectedDate(day.date)
    }
  }

  // Format month and year for display
  const formatMonthYear = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" })
  }

  // Generate weekday headers
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  // Generate calendar days
  const calendarDays = generateCalendarDays()

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <Button variant="outline" size="icon" onClick={previousMonth}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous month</span>
        </Button>
        <h2 className="font-medium">{formatMonthYear(currentMonth)}</h2>
        <Button variant="outline" size="icon" onClick={nextMonth}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next month</span>
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {weekdays.map((day) => (
          <div key={day} className="py-2 text-sm font-medium text-muted-foreground">
            {day}
          </div>
        ))}
        {calendarDays.map((day, index) => (
          <div
            key={index}
            onClick={() => handleDateClick(day)}
            className={cn(
              "aspect-square flex items-center justify-center rounded-md text-sm",
              day.isCurrentMonth ? "cursor-pointer" : "opacity-0 cursor-default",
              day.isSelected && "bg-teal-600 text-white",
              day.isToday && !day.isSelected && "border border-teal-600",
              day.isAvailable && day.isCurrentMonth && !day.isSelected && "hover:bg-teal-100",
              !day.isAvailable && day.isCurrentMonth && "text-muted-foreground line-through cursor-not-allowed",
            )}
          >
            {day.date?.getDate()}
          </div>
        ))}
      </div>
      <div className="mt-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-teal-600"></div>
          <span>Selected date</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full border border-teal-600"></div>
          <span>Today</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-muted line-through"></div>
          <span>Unavailable</span>
        </div>
      </div>
    </div>
  )
}
