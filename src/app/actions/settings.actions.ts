import {createAction} from "@ngrx/store";

export const SettingsActions = {
  load: createAction("[Global Component] Load"),
  loadSuccess: createAction("[Global Component] Load Success")
};
