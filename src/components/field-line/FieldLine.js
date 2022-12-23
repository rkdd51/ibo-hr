import styled from "@emotion/styled";
import { Grid, Icon, Typography, BODY_SMALL } from "@mds/mds-reactjs-library";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
// import Outline16Check from '@mds/mds-icons/icons/svg/outline-16-check.svg';

const FieldContainer = styled.div`
  padding-bottom: 20px !important;
  @media (min-width: 451px and max-width: 1000px) {
    padding-bottom: 10px !important;
  }
  @media (max-width: 450px) {
    padding-bottom: 0px !important;
  }
`;

const FilterGridStyled = styled(Grid)`
  display: flex;
`;

const IconStyled = styled(Icon)`
  padding: 0.4375rem 0.9375rem;
  color: #757575;
  background-color: #f2f2f2;
  border: 1px solid #b3b3b3;
  border-right: 0px;
  border-radius: 0;
  height: 24px;
  width: 20px;
  box-sizing: content-box !important;
`;
const IconStyledOne = styled(Icon)`
  padding: 0.4375rem 0.9375rem;
  color: #757575;
  background-color: #f2f2f2;
  border: 1px solid #b3b3b3;
  border-right: 0px;
  border-radius: 0;
  height: 329px;
  width: 20px;
  box-sizing: content-box !important;
`;
const IconStyledTwo = styled(Icon)`
  padding: 0.4375rem 0.9375rem;
  color: blue;
  background-color: #white;
  border: 1px solid blue;

  border-radius: 0;
  height: 24px;
  width: 20px;

  box-sizing: content-box !important;
`;
const FieldLine = ({
  span,

  icon,
  iconTwo,
  label,
  children,
  error,
  note,
  validChargeCode,
}) => {
  return (
    <FieldContainer>
      {label && (
        <Typography style={{ marginBottom: "5px" }}>
          <b>{label}</b>
        </Typography>
      )}

      <FilterGridStyled item span={span}>
        {icon && <IconStyled src={icon} />}
        {children}
        {iconTwo && <IconStyledTwo src={iconTwo} />}
      </FilterGridStyled>
      {/* {validChargeCode === true && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Icon src={Outline16Check} color="green" />
          <Typography
            style={{
              color: "green",
              marginLeft: "5px",
            }}
          >
            Valid!
          </Typography>
        </div>
      )}
      {error && (
        <div style={{ marginTop: 5 }} className="field-error">
          <FontAwesomeIcon icon={faExclamationTriangle} color="red" />
          <Typography
            style={{ color: "red", display: "contents", mraginLeft: 12 }}
          >
            {error?.label}
          </Typography>
        </div>
      )}
      {note && (
        <Typography type={BODY_SMALL} style={{ marginTop: "5px" }}>
          {note}
        </Typography>
      )} */}
    </FieldContainer>
  );
};

export default FieldLine;
