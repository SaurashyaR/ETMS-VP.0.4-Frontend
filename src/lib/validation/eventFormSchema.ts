import { z } from "zod";

// Custom schema to validate a FileList with at least one file
const fileSchema = z
  .custom<FileList>((val) => val instanceof FileList && val.length > 0, {
    message: "Photo is required",
  });

export const eventFormSchema = z.object({
  eventPhoto: fileSchema,
  eventName: z.string().min(1, "Event Name is required"),
  eventDate: z.string().min(1, "Event Date is required"),
  eventTime: z.string().min(1, "Event Time is required"),
  location: z.string().min(1, "Location is required"),
  doorTime: z.string().min(1, "Door time is required"),
  ticketPrice: z.coerce
    .number()
    .min(0, "Ticket price must be a positive number"),
  eventDetails: z.string().min(1, "Event details are required"),
  terms: z.string().min(1, "Terms and conditions are required"),
  artistName: z.string().min(1, "Artist Name is required"),
  artistRole: z.string().min(1, "Artist Role is required"),
  artistBio: z.string().min(1, "Artist bio is required"),
  artistPhoto: fileSchema,
  eventLocation: z.string().min(1, "Event Location is required"),
  organizer: z.string().min(1, "Organizer name is required"),
});

// Inferred TypeScript type from the schema
export type EventFormSchema = z.infer<typeof eventFormSchema>;
