import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
    pastes: localStorage.getItem("pastes") ? JSON.parse(localStorage.getItem("pastes")) : []
}

export const pasteSlice = createSlice({
    name: 'paste',
    initialState,
    reducers: {
        AddToPaste: (state, action) => {
            const paste = action.payload;
            if (typeof paste.content !== "string" || paste.content.trim() === "") {
                toast.dismiss();
                toast.error("Empty Value can't be added");
                return;
            }
            state.pastes.push(paste);
            localStorage.setItem("pastes", JSON.stringify(state.pastes));
            toast.dismiss();
            toast.success("Paste Created Successfully!")
        }
        ,
        UpdateToPaste: (state, action) => {
            const paste = action.payload;
            const index = state.pastes.findIndex((item) => item._id === paste._id);
            if (index >= 0) {
                state.pastes[index] = paste;
                localStorage.setItem("pastes", JSON.stringify(state.pastes));
                toast.success("Paste updated successfully!");
            }
        },
        ResetAllPaste: (state) => {
            state.pastes = [];
            localStorage.removeItem("pastes");
            toast.dismiss();

            toast.success("All pastes have been reset!");
        },
        RemoveFromPaste: (state, action) => {
            const pasteId = action.payload;
            state.pastes = state.pastes.filter((item) => item._id !== pasteId); // ✅ Corrected filter logic
            localStorage.setItem("pastes", JSON.stringify(state.pastes));
            toast.dismiss();

            toast.success("Paste deleted successfully!");
        },
    },
});

// Action creators are generated for each case reducer function
export const { AddToPaste, UpdateToPaste, ResetAllPaste, RemoveFromPaste } = pasteSlice.actions;

export default pasteSlice.reducer;
