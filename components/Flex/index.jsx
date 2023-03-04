import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    ${(props) => props.flex && `flex: ${props.flex}`};
    justify-content: ${(props) => props.justify || 'center'};
    align-items: ${(props) => props.align || 'center'};
    flex-direction: ${(props) => props.dir || 'column'};
    flex: ${(props) => props.flex || '0'};
    background: ${(props) => props.backgroundColor || 'none'};
    background-size: ${(props) => props.backgroundSize || 'cover'};
    border-radius: ${(props) => props.borderRadius || '0px'};
    padding: ${(props) => props.padding || '0'};
    margin: ${(props) => props.margin || '0'};
    box-shadow: ${(props) => props.boxShadow || 'none'};
    gap: ${(props) => props.gap};
    flex-wrap: ${(props) => props.flexWrap};
    min-width: ${(props) => props.minWidth};
    max-width: ${(props) => props.maxWidth};
    border: ${(props) => props.border};
    border-bottom: ${(props) => props.borderBottom};
    color: ${(props) => props.color};
    align-self: ${(props) => props.alignSelf};
    flex-basis: ${(props) => props.flexBasis};
    transform: ${(props) => props.transform};
    z-index: ${(props) => props.zIndex};
`;