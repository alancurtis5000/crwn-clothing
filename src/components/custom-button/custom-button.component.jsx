import "./custom-button.styles.scss";
import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => {
  return (
    <CustomButtonContainer className="CustomButton" {...props}>
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
