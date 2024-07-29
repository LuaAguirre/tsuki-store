/// <reference types="astro/client" />

interface SnipcartSettings {
  publicApiKey: string
  loadStrategy: 'on-user-interaction' | 'onload'
  addProductBehavior: 'none' | 'link'
  modalStyle: 'side' | 'standard'
  version?: string | any
  timeoutDuration?: number
  domain?: any
  protocol?: any
  loadCSS?: any
  currency?: string
  templatesUrl?: string
}

interface Window {
  SnipcartSettings: SnipcartSettings
  LoadSnipcart: any
}
