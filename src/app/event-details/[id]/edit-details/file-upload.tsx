import React from 'react';
import { Controller, Control } from 'react-hook-form';
import ImageUploaderField from './image-uploader';

interface Props {
    control: Control<any>;
    name: string;
    multiple?: boolean;
}

const ImageUploaderController: React.FC<Props> = ({ control, name, multiple = true }) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={[]}
            rules={{ required: 'At least one image is required.' }}
            render={({ field, fieldState }) => (
                <ImageUploaderField
                    field={field}
                    fieldState={fieldState}
                    multiple={multiple}
                />
            )}
        />
    );
};

export default ImageUploaderController;
