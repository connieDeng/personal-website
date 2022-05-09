import {
  CategoryTitleCS,
  LeftCategoryTitleCS,
} from "../styledComponents/categoryTitleCS";

export const StyledCategoryTitle = ({ text, color }) => {
  return (
    <CategoryTitleCS text={text} color={color}>
      <div className="category-title">{text}</div>
      <div className="rectangle" />
    </CategoryTitleCS>
  );
};

export const LeftStyledCategoryTitle = ({ text, color }) => {
  return (
    <LeftCategoryTitleCS text={text} color={color}>
      <div className="category-title">{text}</div>
      <div className="rectangle" />
    </LeftCategoryTitleCS>
  );
};

export default StyledCategoryTitle;
