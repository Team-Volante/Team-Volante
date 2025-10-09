'use client'

import { useEffect, useRef } from 'react'

interface SplineViewerProps {
  url: string
  className?: string
}

export default function SplineViewer({ url, className }: SplineViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      // Clear any existing content first
      containerRef.current.innerHTML = ''
      
      // Create the spline-viewer element dynamically
      const splineViewer = document.createElement('spline-viewer')
      splineViewer.setAttribute('url', url)
      
      // Add error handling
      splineViewer.addEventListener('error', (e) => {
        console.warn('Spline viewer error:', e)
      })
      
      containerRef.current.appendChild(splineViewer)

      return () => {
        // Cleanup
        if (containerRef.current) {
          containerRef.current.innerHTML = ''
        }
      }
    }
  }, [url])

  return <div ref={containerRef} className={className}></div>
}