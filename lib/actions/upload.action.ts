import { deleteObject, getDownloadURL, ref, updateMetadata, uploadBytesResumable } from "firebase/storage";
import { firestorage, productRef } from "../db";
import { toast } from "sonner";
import { ACCEPTED_IMAGE_MIME_TYPES } from "@/schemas/product";

export const upload = async (file: File, role: string | undefined) => {
  
  const storageRef = ref(productRef, new Date().getTime() + '-' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, {
        contentType: ACCEPTED_IMAGE_MIME_TYPES.join(','),
        customMetadata: {
            role: `${role}`,
        }
    })
    const toastId = toast("Uploading...")
    try {
     const fileLink = await new Promise((resolve, rejects) => {
                        uploadTask.on('state_changed',
                            (snapshot) => {
                                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                 toast('Upload is ' + progress.toFixed(0) + '% done', {
                                                id: toastId
                                            });
                            },
                            (error) => {
                                rejects(error.message);
                            },
                            () => {
                                // Upload completed successfully, now we can get the download URL
                                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                                    toast.success('file uploaded...', {
                                        id: toastId
                                    });
                                    resolve(downloadURL);
                                });
                            }
                        );
                    })
        return fileLink;
    }
    catch (error: any) {
        toast.error(`Failed to upload ${error && error?.message}`, {
                                    id: toastId
        });
        return null
    }

}
function extractFileName(url: string):string {
 const urlObject = new URL(url);
    const pathname = urlObject.pathname;
  if (typeof pathname === 'string') {
      const segments = decodeURIComponent(pathname).split("/");
      return segments[segments.length - 1];
  } else {
    return "";
  }
}
export const remove = async (link: string, role: string | undefined) => {
    const storageRef = ref(firestorage,'products/' + process.env.NEXT_PUBLIC_STORAGE_KEY + '/' + extractFileName(link));
     // Update metadata before deleting the object
  updateMetadata(storageRef, {
        contentType: ACCEPTED_IMAGE_MIME_TYPES.join(','),
        customMetadata: {
        "role":`${role}`,
        },
  }).then(() => {
    // Delete the object
    deleteObject(storageRef).then(() => {
      toast.success("file removed from storage")
    }).catch((error) => {
      toast.error(error.message)
    });
  }).catch((error) => {
    toast.error(error.message)
  });
}