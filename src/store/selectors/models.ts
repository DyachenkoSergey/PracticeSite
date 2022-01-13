import { createSelector } from '@reduxjs/toolkit';

const stateSelector = (state: any) => state.models;
export const oneModelSelector = createSelector(stateSelector, (state) => state.oneModel);
export const modelsSelector = createSelector(stateSelector, (state) => state.models);
export const searchModelsSelector = createSelector(stateSelector, (state) => state.search);

