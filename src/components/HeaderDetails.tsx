import styled from 'styled-components'
import colors from './ColorsDefault'

const HeaderDetails = styled.div`
    header {
        width: 100%;
        padding: 1.25rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${colors.purpleRckt};
        border-bottom: 5px solid ${colors.purpleRcktLight};
    }
`

export default HeaderDetails