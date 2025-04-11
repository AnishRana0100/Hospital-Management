import { Suspense } from "react"
import type { Metadata } from "next"
import { Users, CalendarClock, Bell, BedDouble, Clock, Stethoscope } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import PatientAdmissionChart from "@/components/dashboard/patient-admission-chart"
import BedOccupancyChart from "@/components/dashboard/bed-occupancy-chart"
import LengthOfStayChart from "@/components/dashboard/length-of-stay-chart"
import ResourceUsageChart from "@/components/dashboard/resource-usage-chart"
import AlertsList from "@/components/dashboard/alerts-list"
import DashboardSkeleton from "@/components/dashboard/dashboard-skeleton"
import Sidebar from "@/components/sidebar"

export const metadata: Metadata = {
  title: "Hospital Resource Management Dashboard",
  description: "AI-powered hospital resource management and forecasting dashboard",
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-4 md:p-6 lg:p-8 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500 mt-1">AI-powered hospital resource management</p>
          </div>
          <div className="flex items-center mt-4 md:mt-0 space-x-2">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <CalendarClock className="mr-2 h-4 w-4" />
              Apr 11, 2025
            </Button>
            <Button variant="outline" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                3
              </span>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
                  <Users className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">243</div>
                  <p className="text-xs text-gray-500">+12% from last week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Bed Occupancy</CardTitle>
                  <BedDouble className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78%</div>
                  <p className="text-xs text-gray-500">+5% from yesterday</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Length of Stay</CardTitle>
                  <Clock className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.2 days</div>
                  <p className="text-xs text-gray-500">-0.5 days from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Staff on Duty</CardTitle>
                  <Stethoscope className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">86</div>
                  <p className="text-xs text-gray-500">32 doctors, 54 nurses</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Suspense fallback={<DashboardSkeleton />}>
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Patient Admission Forecast</CardTitle>
                    <CardDescription>Predicted admissions for the next 7 days</CardDescription>
                    <div className="flex space-x-2 mt-2">
                      <Badge variant="outline">Day</Badge>
                      <Badge variant="outline">Week</Badge>
                      <Badge variant="secondary">Month</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <PatientAdmissionChart />
                  </CardContent>
                </Card>
              </Suspense>

              <Suspense fallback={<DashboardSkeleton />}>
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Bed Occupancy</CardTitle>
                    <CardDescription>Current vs predicted bed availability</CardDescription>
                    <div className="flex space-x-2 mt-2">
                      <Badge variant="secondary">All</Badge>
                      <Badge variant="outline">ICU</Badge>
                      <Badge variant="outline">General</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <BedOccupancyChart />
                  </CardContent>
                </Card>
              </Suspense>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <Suspense fallback={<DashboardSkeleton />}>
                <Card className="lg:col-span-1">
                  <CardHeader>
                    <CardTitle>Length of Stay Distribution</CardTitle>
                    <CardDescription>Patient stay duration breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <LengthOfStayChart />
                  </CardContent>
                </Card>
              </Suspense>

              <Suspense fallback={<DashboardSkeleton />}>
                <Card className="lg:col-span-1">
                  <CardHeader>
                    <CardTitle>Resource Usage Forecast</CardTitle>
                    <CardDescription>Predicted resource requirements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResourceUsageChart />
                  </CardContent>
                </Card>
              </Suspense>

              <Suspense fallback={<DashboardSkeleton />}>
                <Card className="lg:col-span-1">
                  <CardHeader>
                    <CardTitle>Alerts & Recommendations</CardTitle>
                    <CardDescription>System generated insights</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AlertsList />
                  </CardContent>
                </Card>
              </Suspense>
            </div>
          </TabsContent>

          <TabsContent value="departments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Department Overview</CardTitle>
                <CardDescription>View and manage department-specific metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Department data will be displayed here. Select a department to view detailed metrics.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Resource Allocation</CardTitle>
                <CardDescription>Manage and allocate hospital resources</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Resource allocation tools and visualizations will be displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
