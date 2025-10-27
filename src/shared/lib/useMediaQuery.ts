import { useEffect, useState } from "react";

import { mediaQueries } from "../config/breakpoints";

/**
 * 미디어 쿼리를 기반으로 반응형 상태를 반환하는 Hook
 *
 * @example
 * ```tsx
 * const isMobile = useMediaQuery('mobile');
 * const isTablet = useMediaQuery('tablet');
 * const isDesktop = useMediaQuery('desktop');
 * ```
 */
export function useMediaQuery(query: keyof typeof mediaQueries) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(mediaQueries[query]);

    // 초기 값 설정
    setMatches(media.matches);

    // 리스너 등록
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // `addEventListener` 방식 사용 (최신 브라우저 호환)
    media.addEventListener("change", listener);

    // cleanup
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}

/**
 * 화면 크기를 자동으로 감지하는 Hook
 *
 * @returns {object} { isMobile, isTablet, isDesktop }
 */
export function useResponsive() {
  const isMobile = useMediaQuery("mobile");
  const isTablet = useMediaQuery("tablet");
  const isDesktop = useMediaQuery("desktop");

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
}
