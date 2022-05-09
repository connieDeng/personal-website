import styled from "styled-components";
const fontSize = "3em";

export const CategoryTitleCS = styled.section`
  position: absolute;
  z-index: 100;
  top: 10em;
  left: 10em;

  .category-title {
    font-size: ${fontSize};
    font-family: Couture Bold;
    letter-spacing: 0.08em;
  }

  .rectangle {
    position: absolute;
    z-index: -1;
    top: 2.3em;
    width: ${(props) => props.text.length * 2.45}em;
    height: 20px;
    background-color: ${(props) => props.color || "gray"};
  }
`;

export const LeftCategoryTitleCS = styled(CategoryTitleCS)`
  text-align: right;
  right: 10em;

  .rectangle {
    right: 0em;
    width: ${(props) => props.text.length * 2.4}em;
  }
`;

export default CategoryTitleCS;
