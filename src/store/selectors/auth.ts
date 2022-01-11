import { createSelector } from '@reduxjs/toolkit';
import { IUser } from 'interfaces/user';

export interface IStoreState {
    auth: IUser;
}

const stateSelector = (state: IStoreState): IUser => state.auth;

export const userSelector = createSelector(stateSelector, (state) => state);
export const userIdSelector = createSelector(stateSelector, (state) => state.userId);
export const userNameSelector = createSelector(stateSelector, (state) => state.userName);
export const userEmailSelector = createSelector(stateSelector, (state) => state.userEmail);
export const userTokensSelector = createSelector(stateSelector, (state) => state.userTokens);
export const roleSelector = createSelector(stateSelector, (state) => state.userRole);
export const tokenSelector = createSelector(stateSelector, (state) => state.token);