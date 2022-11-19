import type { BCharityPublication } from '@generated/bcharitytypes'
import create from 'zustand'

interface GlobalModalState {
  showReportModal: boolean
  reportPublication: BCharityPublication | null
  reportConfig: any
  setShowReportModal: (
    showReportModal: boolean,
    reportPublication: BCharityPublication | null,
    reportConfig?: any
  ) => void
  showStatusModal: boolean
  setShowStatusModal: (showStatusModal: boolean) => void
}

export const useGlobalModalStateStore = create<GlobalModalState>((set) => ({
  showReportModal: false,
  reportPublication: null,
  reportConfig: null,
  setShowReportModal: (showReportModal, reportPublication, reportConfig) =>
    set(() => ({ showReportModal, reportPublication, reportConfig })),
  showStatusModal: false,
  setShowStatusModal: (showStatusModal) => set(() => ({ showStatusModal }))
}))
