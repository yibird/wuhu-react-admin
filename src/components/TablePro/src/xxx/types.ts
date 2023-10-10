import { useState } from 'react';
import { createContainer } from 'react-tracked';

export interface State {}

const initialState: State = {};

const useContextState = () => useState(initialState);

export const { Provider, useTracked: useSharedState } = createContainer(useContextState);
