import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  modules: <any>[],
};

const modulesSlice = createSlice({
  name: "modules",
  initialState: initialState,
  reducers: {
    setModules: (state, action) => {
      state.modules = action.payload;
    },

    addModule: (state, { payload: module }) => {
      // const newModule: any = {
      //   name: module.name,
      //   course: module.course,
      //   lessons: [],
      // };
      state.modules = [...state.modules, module] as any;
    },

    deleteModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.filter(
        (module: any) => module._id != moduleId
      );
    },
    editModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((module: any) =>
        module._id === moduleId ? { ...module, editing: true } : module
      ) as any;
    },
    updateModule: (state, { payload: module }) => {
      state.modules = state.modules.map((m: any) =>
        m._id === module._id ? module : m
      ) as any;
    },
  },
});

export const { addModule, deleteModule, editModule, updateModule, setModules } =
  modulesSlice.actions;
export default modulesSlice.reducer;
