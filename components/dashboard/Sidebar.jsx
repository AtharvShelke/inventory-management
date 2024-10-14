import { BarChart4, Cable, ChevronLeft, Files, Package, ShoppingBag, ShoppingCart, Warehouse } from 'lucide-react'
import React from 'react'

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-white dark:bg-gray-900   text-gray-50 flex flex-col">
    
       {/* Top */}
       <div className="flex flex-row h-12 items-center gap-2 bg-slate-950 px-5">
        <Warehouse/>
        <h1>Inventory</h1>
       </div>
       {/* Mid */}
       <nav className="flex-1 -mx-3 space-y-3 px-5 mt-10">
            

            <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>

                <span className="mx-2 text-sm font-medium">Home</span>
            </a>

            <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                <Package className="w-5 h-5"/>

                <span className="mx-2 text-sm font-medium">Inventory</span>
            </a>

            <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                <ShoppingCart className="w-5 h-5"/>

                <span className="mx-2 text-sm font-medium">Sales</span>
            </a>

            <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                <ShoppingBag className="w-5 h-5"/>

                <span className="mx-2 text-sm font-medium">Purchases</span>
            </a>

            <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                <Cable className="w-5 h-5"/>

                <span className="mx-2 text-sm font-medium">Integration</span>
            </a>

            <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                <BarChart4 className="w-5 h-5"/>

                <span className="mx-2 text-sm font-medium">Reports</span>
            </a>

            <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                <Files className="w-5 h-5"/>
                <span className="mx-2 text-sm font-medium">Documents</span>
            </a>
        </nav>

       {/* Bottom */}
       <div className="flex flex-row h-12 items-center px-4 gap-2 bg-slate-950 justify-center">
        <ChevronLeft/>
       </div>
    
    </aside>
  )
}
