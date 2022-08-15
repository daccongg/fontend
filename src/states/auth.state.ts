import {Note} from 'src/models/note.model'

export interface AuthState{
idToken:string;
isLoading: boolean;
error: string;
}

export interface NoteState{
    notes: Note[];
    error:string;
    isLoading: boolean;
}
