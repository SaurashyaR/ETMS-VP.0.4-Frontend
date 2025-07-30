import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { useDropzone, FileRejection } from 'react-dropzone';
import { ControllerRenderProps, ControllerFieldState as RHFFieldState } from 'react-hook-form';

const MAX_FILES = 1;
const MAX_FILE_SIZE_MB = 10;

interface PreviewFile extends File {
    preview: string;
}

interface Props {
    field: ControllerRenderProps<any, any>;
    fieldState: RHFFieldState;
    multiple?: boolean;
}

const ImageUploaderField: React.FC<Props> = ({ field, fieldState, multiple }) => {
    const { onChange, value } = field;
    const { error } = fieldState;

    const [files, setFiles] = useState<PreviewFile[]>(value || []);
    const [dropError, setDropError] = useState<string | null>(null);

    const onDrop = useCallback(
        (acceptedFiles: File[], fileRejections: FileRejection[]) => {
            setDropError(null);

            if (fileRejections.length > 0) {
                setDropError('Some files were rejected. Please ensure they are under 10MB and valid image types.');
                return;
            }

            let newFiles: PreviewFile[] = acceptedFiles.map(file =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            );

            if (!multiple) {
                newFiles = newFiles.slice(0, 1);
            }

            const combinedFiles = multiple ? [...files, ...newFiles].slice(0, MAX_FILES) : newFiles;

            setFiles(combinedFiles);
            onChange(combinedFiles);
        },
        [files, multiple, onChange]
    );

    const removeImage = (index: number) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
        onChange(updatedFiles);
    };

    const {
        getRootProps,
        getInputProps,
        isDragActive,
    } = useDropzone({
        onDrop,
        multiple,
        accept: { 'image/*': [] },
        maxSize: MAX_FILE_SIZE_MB * 1024 * 1024,
    });

    useEffect(() => {
        return () => {
            files.forEach(file => URL.revokeObjectURL(file.preview));
        };
    }, [files]);

    return (
        <div>
            <div
                {...getRootProps()}
                className={`border-1 p-6 rounded-[10px] text-center transition-colors duration-300 cursor-pointer ${isDragActive ? 'bg-gray-100 border-blue-400' : 'bg-white border-gray-300'
                    } ${dropError ? 'border-red-500' : ''}`}
            >
                <input {...getInputProps()} />

                <div className='space-y-2'>

                    <p className="text-black">
                        Drag and Drop files to upload
                    </p>
                    <p className="text-sm text-gray-400 mt-1">Your file will be private until you publish it </p>
                    <button className='cursor-pointer border border-[#0000004D] p-[10px] rounded-[10px]'>
                        Select files
                    </button>
                </div>
                    
            </div>

            {dropError && <p className="text-red-500 text-sm mt-2">{dropError}</p>}
            {error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}

            {files.length > 0 && (
                <div className="flex flex-wrap mt-4 gap-4">
                    {files.map((file, index) => (
                        <div key={index} className="relative w-24 h-24 rounded overflow-hidden border">
                            <Image
                                height={400}
                                width={400}
                                src={file.preview}
                                alt={`Preview ${index}`}
                                className="object-cover w-full h-full"
                            />
                            <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center hover:bg-red-700"
                                title="Remove"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageUploaderField;
