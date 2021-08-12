import { createGlobalStyle } from 'styled-components';
import bikoURL from './Biko.otf';
import coutureURL from './couture-bld.otf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Biko';
        src: url(${bikoURL});
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Couture Bold';
        src: url(${coutureURL});
        font-weight: normal;
        font-style: normal;
    }
`;