import { DateTime } from "luxon";

export interface User{
    name: string,
    role: string;
    authToken?: { id: string, expirationDate: DateTime};
    // Depends on how the backend is returning (id, expirationDate) for this example
}