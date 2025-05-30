type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
  let ref = null
  return function (...args) {
    if (ref) {
      clearTimeout(ref)
    }
    ref = setTimeout(() => fn(...args), t)
  }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */