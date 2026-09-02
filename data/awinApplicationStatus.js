// Internal baseline from the authenticated AWIN publisher directory.
// Network conversion, approval and EPC figures are programme-wide directional
// benchmarks, not Wild & Well performance. Do not expose as endorsements.
export const awinApplicationBaseline = {
  auditedAt: '2026-09-02',
  pendingCount: 40,
  pendingPriority: [
    { advertiser: 'Project Solar', pillar: 'home-energy', conversionRate: 24.49, approvalRate: 92.31, epc: 4.9, currency: 'GBP' },
    { advertiser: 'Pure Pet Food', pillar: 'dogs', conversionRate: 7.56, approvalRate: 86.91, epc: 1.17, currency: 'GBP' },
    { advertiser: 'VetRelieve', pillar: 'dogs', conversionRate: 7.26, approvalRate: 100, epc: 1.11, currency: 'GBP' },
    { advertiser: 'Fieldtrip Supply Co', pillar: 'outdoors', conversionRate: 7.79, approvalRate: 100, epc: 0.9, currency: 'GBP' },
    { advertiser: 'Zee.Dog', pillar: 'dogs', conversionRate: 24.01, approvalRate: 100, epc: 0.59, currency: 'USD' },
    { advertiser: 'OVO Solar & Heating', pillar: 'home-energy', conversionRate: 3.3, approvalRate: 50.25, epc: 0.46, currency: 'GBP' },
    { advertiser: 'Harringtons Pet Food', pillar: 'dogs', conversionRate: 13.94, approvalRate: 81.38, epc: 0.44, currency: 'GBP' },
    { advertiser: 'Blacks', pillar: 'outdoors', conversionRate: 6.63, approvalRate: 87.43, epc: 0.18, currency: 'GBP' },
    { advertiser: 'Camping World UK', pillar: 'outdoors', conversionRate: 4.12, approvalRate: 90.61, epc: 0.16, currency: 'GBP' },
    { advertiser: 'Mersey Raw Dog Food', pillar: 'dogs', conversionRate: 7.45, approvalRate: 64.86, epc: 0.11, currency: 'GBP' },
  ],
  rejectedStrategic: ['Decathlon UK', 'Ribble Cycles', 'Helly Hansen Sportswear UK', 'Salomon UK', 'Levoit UK', 'Xero Shoes', 'Miniml'],
  note: 'Build non-dependent authority and re-evaluate appeals after traffic and click evidence exists.',
}
