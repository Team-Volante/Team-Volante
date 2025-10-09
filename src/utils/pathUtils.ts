"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

export function useBasePath() {
  const pathname = usePathname();
  
  return useMemo(() => {
    // Check if we're on a path that starts with /Team-Volante
    if (pathname && pathname.startsWith('/Team-Volante')) {
      return '/Team-Volante';
    }
    return '';
  }, [pathname]);
}

export function getAssetPath(path: string): string {
  // For server components or static usage
  if (typeof window === 'undefined') {
    return `${process.env.GH_PAGES_BASE || ''}${path}`;
  }
  
  // For client components
  const basePath = window.location.pathname.startsWith('/Team-Volante') 
    ? '/Team-Volante' 
    : '';
  return `${basePath}${path}`;
}