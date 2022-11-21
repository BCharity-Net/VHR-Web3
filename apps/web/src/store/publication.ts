import create from 'zustand'

interface PublicationState {
  showNewPostModal: boolean
  setShowNewPostModal: (showNewPostModal: boolean) => void
  showShareModal: boolean
  setShowShareModal: (showShareModal: boolean) => void
  publicationContent: string
  setPublicationContent: (publicationContent: string) => void
  audioPublication: { title: string; author: string; cover: string; coverMimeType: string }
  setAudioPublication: (audioPublication: {
    title: string
    author: string
    cover: string
    coverMimeType: string
  }) => void
}

export const usePublicationStore = create<PublicationState>((set) => ({
  showNewPostModal: false,
  setShowNewPostModal: (showNewPostModal) => set(() => ({ showNewPostModal })),
  showShareModal: false,
  setShowShareModal: (showShareModal) => set(() => ({ showShareModal })),
  publicationContent: '',
  setPublicationContent: (publicationContent) => set(() => ({ publicationContent })),
  audioPublication: { title: '', author: '', cover: '', coverMimeType: 'image/jpeg' },
  setAudioPublication: (audioPublication) => set(() => ({ audioPublication }))
}))
