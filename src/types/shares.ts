export interface Share {
  id: number
  number: number
  protocol: string
  uid: string
  address: string
  port: number
  security: string
  encryption: string
  publicKey: string
  headerType: string
  fingerprint: string
  network: string
  flow: string
  sni: string
  shortIds: string
  remarks: string
  updatedAt: string
}

export interface Shares {
  shares: Share[]
}

export const URLPrefix = 'http://localhost:8080'
