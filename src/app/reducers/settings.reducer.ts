import {createReducer, on} from "@ngrx/store";
import {SettingsActions} from "../actions/settings.actions";

export const initialState = {};

export const settingsReducer = createReducer(initialState,
  on(SettingsActions.load, state => ({
      cryptoCurrencies: []
    })
  ),
  on(SettingsActions.loadSuccess, state => ({
      cryptoCurrencies: [{a: "b"}]
    })
  ),
);
