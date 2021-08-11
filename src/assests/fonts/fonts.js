import { createGlobalStyle } from 'styled-components';
import bikoURL from './Biko.otf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Biko';
        src: url(${bikoURL});
        font-weight: normal;
        font-style: normal;
    }
`;