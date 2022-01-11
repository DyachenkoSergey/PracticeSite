import { createSelector } from '@reduxjs/toolkit';

const stateSelector = (state: any) => state.models;
export const modelsSelector = createSelector(stateSelector, (state) => state.models);
export const searchModelsSelector = createSelector(stateSelector, (state) => state.search);

