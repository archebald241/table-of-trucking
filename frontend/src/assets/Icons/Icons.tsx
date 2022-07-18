import React from "react";

const colors = new Map([
    ["purple", "#ABB9FC"],
    ["white", "#FFFFFF"],
    ["gray", "#ADADAD"]
]);

type ColorTypes = "gray" | "purple" | "white"

interface IProps {
    color: ColorTypes,
    size?: number
}

export const IconCloseSquare:React.FC<IProps> = ({color, size= 19}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8171 1.58333H6.18296C3.30129 1.58333 1.58337 3.30124 1.58337 6.18291V12.8092C1.58337 15.6987 3.30129 17.4167 6.18296 17.4167H12.8092C15.6909 17.4167 17.4088 15.6987 17.4088 12.8171V6.18291C17.4167 3.30124 15.6988 1.58333 12.8171 1.58333ZM12.16 11.3208C12.3896 11.5504 12.3896 11.9304 12.16 12.16C12.0413 12.2787 11.8909 12.3342 11.7405 12.3342C11.59 12.3342 11.4396 12.2787 11.3209 12.16L9.50004 10.3392L7.67921 12.16C7.56046 12.2787 7.41004 12.3342 7.25962 12.3342C7.10921 12.3342 6.95879 12.2787 6.84004 12.16C6.61046 11.9304 6.61046 11.5504 6.84004 11.3208L8.66087 9.5L6.84004 7.67916C6.61046 7.44958 6.61046 7.06958 6.84004 6.84C7.06962 6.61041 7.44962 6.61041 7.67921 6.84L9.50004 8.66083L11.3209 6.84C11.5505 6.61041 11.9305 6.61041 12.16 6.84C12.3896 7.06958 12.3896 7.44958 12.16 7.67916L10.3392 9.5L12.16 11.3208Z" fill={colors.get(color)}/>
        </svg>
    );
};

export const IconSearch:React.FC<IProps> = ({color, size= 19}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.70833 15.0417C12.2061 15.0417 15.0417 12.2061 15.0417 8.70833C15.0417 5.21053 12.2061 2.375 8.70833 2.375C5.21053 2.375 2.375 5.21053 2.375 8.70833C2.375 12.2061 5.21053 15.0417 8.70833 15.0417Z" stroke={colors.get(color)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.625 16.625L13.1813 13.1812" stroke={colors.get(color)} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export const IconArrows:React.FC<IProps> = ({color, size= 19}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.631104 5L4.26527 5L7.53777 5C8.09777 5 8.37777 4.32333 7.9811 3.92667L4.95944 0.905C4.47527 0.420834 3.68777 0.420834 3.2036 0.905L2.05444 2.05417L0.181936 3.92667C-0.208897 4.32333 0.0711031 5 0.631104 5Z" fill={colors.get(color)}/>
            <path d="M7.53766 8H3.90349H0.630992C0.0709925 8 -0.209007 8.67667 0.187659 9.07333L3.20933 12.095C3.69349 12.5792 4.48099 12.5792 4.96516 12.095L6.11433 10.9458L7.98683 9.07333C8.37766 8.67667 8.09766 8 7.53766 8Z" fill={colors.get(color)}/>
        </svg>
    );
};

export const IconArrowLeft:React.FC<IProps> = ({color, size= 19}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5242 14.1867L12.5242 9.25458L12.5242 4.81333C12.5242 4.05333 11.6058 3.67333 11.0675 4.21167L6.96667 8.3125C6.30959 8.96958 6.30959 10.0383 6.96667 10.6954L8.52625 12.255L11.0675 14.7962C11.6058 15.3267 12.5242 14.9467 12.5242 14.1867Z" fill={colors.get(color)}/>
        </svg>
    );
};

export const IconArrowRight:React.FC<IProps> = ({color, size= 19}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.47583 4.81333L6.47583 9.74542L6.47583 14.1867C6.47583 14.9467 7.39416 15.3267 7.9325 14.7883L12.0333 10.6875C12.6904 10.0304 12.6904 8.96167 12.0333 8.30458L10.4737 6.745L7.9325 4.20375C7.39416 3.67333 6.47583 4.05334 6.47583 4.81333Z" fill={colors.get(color)}/>
        </svg>
    );
};

export const IconArrowDown:React.FC<IProps> = ({color, size= 19}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1867 6.47583L9.25463 6.47583L4.81338 6.47583C4.05338 6.47583 3.67338 7.39417 4.21171 7.9325L8.31254 12.0333C8.96963 12.6904 10.0384 12.6904 10.6955 12.0333L12.255 10.4737L14.7963 7.9325C15.3267 7.39417 14.9467 6.47583 14.1867 6.47583Z" fill={colors.get(color)}/>
        </svg>
    );
};