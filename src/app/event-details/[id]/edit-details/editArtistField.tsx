"use client";

import React from "react";
import ImageUploaderController from "./file-upload";
import Input from "./input";

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

        <>
            {/* Remove Button */}
            {/* {onRemove && (
                <button
                    type="button"
                    onClick={onRemove}
                    className="absolute top-2 right-2 text-red-500 font-bold"
                >
                    ✕
                </button>
            )} */}

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

            <div className="col-span-2 space-y-6">
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

        </>
    );
}
