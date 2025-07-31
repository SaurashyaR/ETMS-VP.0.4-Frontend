import { create } from "zustand";

export interface Artist {
  name: string;
  role: string;
  bio: string;
  photo: FileList | null;
}

interface ArtistStore {
  artists: Artist[];
  addArtist: () => void;
  updateArtist: (index: number, field: keyof Artist, value: any) => void;
}

export const useArtistStore = create<ArtistStore>((set) => ({
  artists: [
    { name: "", role: "", bio: "", photo: null }, // initial artist
  ],
  addArtist: () =>
    set((state) => ({
      artists: [...state.artists, { name: "", role: "", bio: "", photo: null }],
    })),
  updateArtist: (index, field, value) =>
    set((state) => {
      const updated = [...state.artists];
      updated[index][field] = value;
      return { artists: updated };
    }),
}));
