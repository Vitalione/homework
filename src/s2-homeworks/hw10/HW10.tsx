import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStoreType } from './bll/store';
import { loadingAC } from './bll/loadingReducer';
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton';
import { Loader } from './Loader';
import styles from '../../s1-main/App.module.css';

const HW10 = () => {
    const isLoading = useSelector((state: AppStoreType) => state.loading.isLoading);
    const dispatch = useDispatch();
    const [loadingTimeout, setLoadingTimeout] = useState<NodeJS.Timeout | null>(null);

    const setLoading = () => {
        dispatch(loadingAC(true));

        if (loadingTimeout) {
            clearTimeout(loadingTimeout);
        }

        const timeout = setTimeout(() => {
            dispatch(loadingAC(false));
        }, 1500);

        setLoadingTimeout(timeout);
    };

    return (
        <div id="hw10">
            <div className={styles.hwTitle}>Homework #10</div>

            <div className={styles.hw}>
                {isLoading ? (
                    <div id="hw10-loading">
                        <Loader />
                    </div>
                ) : (
                    <SuperButton id="hw10-button-start-loading" onClick={setLoading}>
                        Set loading...
                    </SuperButton>
                )}
            </div>
        </div>
    );
};

export default HW10;
