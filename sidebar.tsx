"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  LayoutDashboard,
  Users,
  CalendarClock,
  Settings,
  Menu,
  X,
  BedDouble,
  ClipboardList,
  BarChart4,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50 md:hidden" onClick={toggleSidebar}>
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <div
        className={cn("fixed inset-0 z-40 bg-black/50 md:hidden", isOpen ? "block" : "hidden")}
        onClick={toggleSidebar}
      />

      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-screen w-64 bg-white border-r border-gray-200 transition-transform md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 border-b border-gray-200">
            <h1 className="text-xl font-bold text-blue-600">MediPredict</h1>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            <NavItem href="/" icon={<LayoutDashboard className="h-5 w-5" />} active>
              Dashboard
            </NavItem>
            <NavItem href="/patients" icon={<Users className="h-5 w-5" />}>
              Patient Flow
            </NavItem>
            <NavItem href="/beds" icon={<BedDouble className="h-5 w-5" />}>
              Bed Management
            </NavItem>
            <NavItem href="/planning" icon={<CalendarClock className="h-5 w-5" />}>
              Resource Planning
            </NavItem>
            <NavItem href="/reports" icon={<BarChart4 className="h-5 w-5" />}>
              Reports
            </NavItem>
            <NavItem href="/tasks" icon={<ClipboardList className="h-5 w-5" />}>
              Tasks
            </NavItem>

            <div className="pt-4 mt-4 border-t border-gray-200">
              <NavItem href="/settings" icon={<Settings className="h-5 w-5" />}>
                Settings
              </NavItem>
            </div>
          </nav>

          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                DR
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Dr. Roberts</p>
                <p className="text-xs text-gray-500">Chief Medical Officer</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

function NavItem({
  href,
  icon,
  children,
  active = false,
}: {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
  active?: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center px-3 py-2 text-sm font-medium rounded-md",
        active ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
      )}
    >
      <span className={cn("mr-3", active ? "text-blue-700" : "text-gray-500")}>{icon}</span>
      {children}
    </Link>
  )
}
