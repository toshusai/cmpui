export function createCssTransitionClassNames(name: string) {
  return {
    enter: `${name}-enter-from`,
    enterActive: `${name}-enter-to ${name}-enter-active`,
    enterDone: `${name}-enter-to`,
    exit: `${name}-leave-from`,
    exitActive: `${name}-leave-to ${name}-leave-active`,
    exitDone: `${name}-leave-to`,
  };
}
