"use client";

import React from "react";
import ImageUploaderController from "../shared/file-upload";
import Input from "../shared/input";

interface EditArtistFieldProps {
    register: any;
    errors: any;
    control: any;
    prefix: string;
    onRemove?: () => void;
    defaultImageUrl?: string;
}

export default function EditArtistField({
    register,
    errors,
    control,
    prefix,
    onRemove,
    defaultImageUrl
}: EditArtistFieldProps) {
    return (
        <div className="col-span-2 p-4 flex flex-col gap-4">
            {/* Top row with remove button */}
            <div className="flex justify-end">
                {onRemove && (
                    <button
                        type="button"
                        onClick={onRemove}
                        className="text-red-500 font-bold text-lg hover:text-red-700"
                    >
                        ✕
                    </button>
                )}
            </div>

            {/* Artist Inputs */}
            <div className="grid grid-cols-2 gap-16">

                <Input
                    type="string"
                    required={true}
                    label="Artist Name"
                    name={`${prefix}.name`}
                    register={register}
                    error={errors?.name?.message}
                />

                <Input
                    type="string"
                    required={true}
                    label="Artist Role"
                    name={`${prefix}.role`}
                    register={register}
                    error={errors?.role?.message}
                />
            </div>

            <Input
                required={true}
                label="Artist Biography"
                name={`${prefix}.biography`}
                register={register}
                multiline={true}
                error={errors?.biography?.message}
            />

            <ImageUploaderController
                control={control}
                name={`${prefix}.artistPhoto`}
                multiple={false}
                defaultValue={defaultImageUrl}
            />
        </div>
    );
}
