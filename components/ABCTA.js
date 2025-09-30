// components/ABCTA.js
import React from 'react';
import CTABox from './CTABox';
import { useAB } from '../lib/ab';

/**
 * ABCTA – A/B test CTA label (and optionally badge).
 * Props:
 *  - slot* (unique id for the test)
 *  - labelVariants*: string[]
 *  - badgeVariants?: string[]
 *  - ...everything CTABox accepts
 */
export default function ABCTA({
  slot,
  labelVariants = [],
  badgeVariants = null,
  ...ctaProps
}) {
  const labelChoice = useAB(`${slot}:label`, labelVariants);
  const badgeChoice = Array.isArray(badgeVariants) && badgeVariants.length
    ? useAB(`${slot}:badge`, badgeVariants)
    : null;

  return (
    <CTABox
      {...ctaProps}
      label={labelChoice?.name || ctaProps.label}
      badge={badgeChoice?.name ?? ctaProps.badge}
    />
  );
}
