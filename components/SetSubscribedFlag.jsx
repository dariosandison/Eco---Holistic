'use client'

import { useEffect } from 'react'

export default function SetSubscribedFlag({ keyName = 'ww_subscribed', value = '1' }) {
  useEffect(() => {
    try {
      localStorage.setItem(keyName, String(value))
    } catch (e) {
      // ignore
    }
  }, [keyName, value])

  return null
}
