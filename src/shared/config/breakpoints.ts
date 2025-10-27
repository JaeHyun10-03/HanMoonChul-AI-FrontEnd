/**
 * 반응형 웹 디자인 브레이크포인트
 *
 * @description
 * - mobile: 모바일 디바이스 (0px ~ 767px)
 * - tablet: 태블릿 디바이스 (768px ~ 1023px)
 * - desktop: 데스크톱 디바이스 (1024px ~)
 */

export const breakpoints = {
  mobile: "0px",
  tablet: "768px",
  desktop: "1024px",
} as const;

export const mediaQueries = {
  mobile: `(max-width: 767px)`,
  tablet: `(min-width: 768px) and (max-width: 1023px)`,
  desktop: `(min-width: 1024px)`,
  tabletUp: `(min-width: 768px)`,
  desktopUp: `(min-width: 1024px)`,
} as const;

export type Breakpoint = keyof typeof breakpoints;

/**
 * 현재 화면 크기를 확인하는 유틸리티
 */
export const isMobile = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
};

export const isTablet = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= 768 && window.innerWidth < 1024;
};

export const isDesktop = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= 1024;
};
