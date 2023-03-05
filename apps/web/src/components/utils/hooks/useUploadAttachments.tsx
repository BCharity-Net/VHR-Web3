import type { NewBCharityAttachment } from '@generated/types';
import uploadToIPFS from '@lib/uploadToIPFS';
import { useCallback } from 'react';
import { toast } from 'react-hot-toast';
import { usePublicationStore } from 'src/store/publication';
import { v4 as uuid } from 'uuid';

const useUploadAttachments = () => {
  const addAttachments = usePublicationStore((state) => state.addAttachments);
  const updateAttachments = usePublicationStore((state) => state.updateAttachments);
  const removeAttachments = usePublicationStore((state) => state.removeAttachments);
  const setIsUploading = usePublicationStore((state) => state.setIsUploading);

  const handleUploadAttachments = useCallback(
    async (attachments: any): Promise<NewBCharityAttachment[]> => {
      setIsUploading(true);
      const files = Array.from(attachments);
      const attachmentIds: string[] = [];

      const previewAttachments: NewBCharityAttachment[] = files.map((file: any) => {
        const attachmentId = uuid();
        attachmentIds.push(attachmentId);

        return {
          id: attachmentId,
          type: file.type,
          altTag: '',
          previewItem: URL.createObjectURL(file)
        };
      });

      const hasLargeAttachment = files.map((file: any) => {
        const isImage = file.type.includes('image');
        const isVideo = file.type.includes('video');
        const isAudio = file.type.includes('audio');

        if (isImage && file.size > 30000000) {
          toast.error(`Image size should be less than 30MB`);
          return false;
        }

        if (isVideo && file.size > 100000000) {
          toast.error(`Video size should be less than 100MB`)
          return false;
        }

        if (isAudio && file.size > 100000000) {
          toast.error(`Audio size should be less than 100MB`);
          return false;
        }

        return true;
      });

      addAttachments(previewAttachments);
      let attachmentsIPFS: NewBCharityAttachment[] = [];
      try {
        if (hasLargeAttachment.includes(false)) {
          setIsUploading(false);
          removeAttachments(attachmentIds);
          return [];
        }

        const attachmentsUploaded = await uploadToIPFS(attachments);
        if (attachmentsUploaded) {
          attachmentsIPFS = previewAttachments.map((attachment: NewBCharityAttachment, index: number) => ({
            ...attachment,
            item: attachmentsUploaded[index].item
          }));
          updateAttachments(attachmentsIPFS);
        }
      } catch {
        removeAttachments(attachmentIds);
        toast.error('Something went wrong while uploading!');
      }
      setIsUploading(false);

      return attachmentsIPFS;
    },
    [addAttachments, removeAttachments, updateAttachments, setIsUploading]
  );

  return { handleUploadAttachments };
};

export default useUploadAttachments;
