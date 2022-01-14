import { useLocalObservable } from 'mobx-react';
import { Store } from './types';

export const useStore = () => {
    const store: Store = useLocalObservable(() => ({
        state: {},
    }));
    return store;
}