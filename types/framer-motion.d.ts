declare module 'framer-motion' {
  import { ComponentType, CSSProperties, ReactNode } from 'react';

  export interface MotionProps {
    children?: ReactNode;
    style?: {
      y?: any;
      x?: any;
      rotate?: any;
      opacity?: any;
      scale?: any;
      [key: string]: any;
    };
    className?: string;
    [key: string]: any;
  }

  export interface MotionValue<T = any> {
    get(): T;
    set(value: T): void;
    subscribe(subscriber: (value: T) => void): () => void;
  }

  export interface ScrollOptions {
    target?: React.RefObject<HTMLElement | null>;
    offset?: [string, string];
  }

  export interface ScrollResult {
    scrollYProgress: MotionValue<number>;
  }

  export const motion: {
    div: ComponentType<MotionProps>;
    // Add other motion components as needed
  };

  export function useScroll(options?: ScrollOptions): ScrollResult;
  
  export function useTransform<T>(
    value: MotionValue | number[],
    inputRange: number[],
    outputRange: T[],
    options?: { clamp?: boolean }
  ): MotionValue<T>;
} 