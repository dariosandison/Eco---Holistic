// components/ABText.js
import React from 'react';
import { useAB } from '../lib/ab';

/**
 * ABText – swaps a text snippet between variants.
 * Props: slot* (string), variants* (string[]), as? (element tag, default 'span')
 */
export default function ABText({ slot, variants = [], as = 'span', ...rest }) {
  const { name } = useAB(slot, variants);
  const Tag = as;
  return <Tag {...rest}>{name}</Tag>;
}
