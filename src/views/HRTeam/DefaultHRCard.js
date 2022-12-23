import {
  Container,
  Grid,
  Card,
  Avatar,
  SIZE_EXTRA_LARGE,
  List,
  ListItem,
  SIZE_HUGE,
} from "@mds/mds-reactjs-library";
import styled from "@emotion/styled";

const DefaultHRCard = (props) => {
  const avatarImage = "https://picsum.photos/id/237/100/100";
  const StyledCard = styled(Card)`
     {
      width: 375px;
      margin-left: 20px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  `;
  const CardDiv = styled.div`
     {
      display: flex;
      flex-direction: column;
    }
  `;
  const Name = styled.div`
     {
      margin-left: 23%;
      font-size: 1.5rem;
      font-weight: 600;
      padding-top: 30px;
    }
  `;
  return (
    <>
      <Grid item lg={4} md={{ span: 4 }} xs={{ span: 12 }} xxs={{ span: 12 }}>
        <StyledCard>
          <CardDiv>
            <div
              style={{
                marginLeft: "20%",
              }}
            >
              <Avatar src={avatarImage} size={SIZE_HUGE} />
              <Name>{props.name}</Name>
            </div>
            <div style={{ marginTop: "30px" }}>
              <List>
                <ListItem>{props.first}</ListItem>
                <ListItem>{props.second} </ListItem>
                <ListItem>{props.third}</ListItem>
                <ListItem>{props.fourth}</ListItem>
                <ListItem>{props.fifth}</ListItem>
                <ListItem>{props.sixth}</ListItem>
                <ListItem>{props.seventh}</ListItem>
                <ListItem>{props.eighth}</ListItem>
                <ListItem>{props.ninth} </ListItem>
              </List>
            </div>
          </CardDiv>
        </StyledCard>
      </Grid>
    </>
  );
};

export default DefaultHRCard;
