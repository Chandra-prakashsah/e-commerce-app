// CustomToast.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { hideToast } from '../../redux/reducers/toastSlice';
import { regular } from '../../style/fonts';

const CustomToast: React.FC = () => {
    const dispatch = useDispatch();
    const { message, type } = useSelector((state: RootState) => state.toast);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (type !== 'none') {
            setIsVisible(true);

            const timer = setTimeout(() => {
                setIsVisible(false);
                dispatch(hideToast());
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [type]);

    const hide = () => {
        setIsVisible(false);
        dispatch(hideToast());
    };

    if (!isVisible) {
        return null;
    }

    let backgroundColor = '#000'; // Default background color
    if (type === 'success') {
        backgroundColor = 'green';
    } else if (type === 'error') {
        backgroundColor = 'red';
    } else if (type === 'pending') {
        backgroundColor = 'blue';
    }

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={styles.text}>{message}</Text>
            <TouchableOpacity onPress={hide} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        borderRadius: 8,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontFamily:regular,
    },
    closeButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 8,
        padding: 5,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default CustomToast;
