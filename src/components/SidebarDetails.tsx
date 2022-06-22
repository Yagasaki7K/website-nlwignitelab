import styled from 'styled-components';
import colors from './ColorsDefault'

const SidebarDetails = styled.div`
    aside {
        width: 348px;
        background: ${colors.gray700};
        padding: 1.2rem;
        border-left-width: 1px;
        border-color: ${colors.gray600};
        min-height: 100vh;

        span {
            font-weight: bold;
            font-size: 1.5rem;
            padding: 1rem;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid ${colors.gray500};
            display: block;
        }

        .lesson {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }
    }

    
`

export default SidebarDetails