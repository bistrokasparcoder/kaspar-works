/**
 * Motion tokens — single source of truth for all spring/ease values.
 * Use these instead of ad-hoc { type: 'spring', stiffness: ... } literals.
 */

export const ease = [0.16, 1, 0.3, 1] as const;
export const easeSmooth = [0.22, 1, 0.36, 1] as const;
export const easeOutCubic = [0.33, 1, 0.68, 1] as const;

/** Default UI spring — body, cards, containers */
export const springBase = { type: 'spring' as const, stiffness: 120, damping: 22 };

/** Snappier spring — buttons, pills, chips */
export const springSnappy = { type: 'spring' as const, stiffness: 260, damping: 20 };

/** Silky spring — hero headline, magnetic elements */
export const springSilk = { type: 'spring' as const, stiffness: 140, damping: 14 };

/** Heavy spring — large sections, pinned elements */
export const springHeavy = { type: 'spring' as const, stiffness: 80, damping: 24 };

/** Word-mask reveal duration */
export const maskRevealDuration = 1.0;

/** Default stagger child delay */
export const staggerChildDelay = 0.08;
