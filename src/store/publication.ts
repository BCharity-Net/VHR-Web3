/* eslint-disable no-unused-vars */
import create from 'zustand'

interface PublicationState {
  showNewPostModal: boolean
  setShowNewPostModal: (showNewPostModal: boolean) => void
  showShareModal: boolean
  setShowShareModal: (showShareModal: boolean) => void
  publicationContent: string
  setPublicationContent: (publicationContent: string) => void
  previewPublication: boolean
  setPreviewPublication: (previewPublication: boolean) => void
}

export const usePublicationStore = create<PublicationState>((set) => ({
  showNewPostModal: false,
  setShowNewPostModal: (showNewPostModal) => set(() => ({ showNewPostModal })),
  showShareModal: false,
  setShowShareModal: (showShareModal) => set(() => ({ showShareModal })),
  publicationContent: '',
  setPublicationContent: (publicationContent) => set(() => ({ publicationContent })),
  previewPublication: false,
  setPreviewPublication: (previewPublication) => set(() => ({ previewPublication }))
}))
