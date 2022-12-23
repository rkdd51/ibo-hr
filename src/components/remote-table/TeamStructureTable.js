import {
  Card,
  Container,
  Grid,
  ThemeProvider,
  Button,
  Table,
  SplitDropdownButton,
  DropdownItem,
  SECONDARY_BUTTON,
  SIZE_SMALL,
  showModal,
} from "@mds/mds-reactjs-library";
import AddTeamStructure from "../modal/add-team-structure/AddTeamStructure";
const TeamStructureTable = () => {
  //  const customTable = {
  //     table: {
  //       lightHeaderBgColor: '#FFFFFF',
  //     },
  //   };

  const showAddTeamStructure = () => {
    showModal({
      id: "addTeamStructure", // unique id of modal
      isModal: true, // means that modal can be closed by ESC keypress and click on page cover
      children: <AddTeamStructure />,
      scrollable: true, // modal will control height of content and add scrollbar if content is too high
    });
  };

  //Team Structure
  const columns = [
    {
      dataKey: "name",
      label: "Name",
      width: 100,
      sortable: false,
      flexGrow: true,
    },
    { dataKey: "date", label: "Date", width: 100, flexGrow: true },
    { dataKey: "file", label: "File/image", width: 100, flexGrow: true },
    { dataKey: "edit", label: "", width: 50, flexGrow: true },
  ];
  const rows = [
    {
      name: "Structure v10",
      date: "15 July 2022",
      file: "file",

      edit: (
        <SplitDropdownButton
          label="Edit"
          appearance={SECONDARY_BUTTON}
          size={SIZE_SMALL}
          onClick={showAddTeamStructure}
        >
          <DropdownItem>
            {" "}
            <Button appearance={SECONDARY_BUTTON} size={SIZE_SMALL}>
              Delete
            </Button>
          </DropdownItem>
        </SplitDropdownButton>
      ),
    },
  ];
  return (
    <>
      <ThemeProvider >
      <Table dark={false} columns={columns} rows={rows} />
      </ThemeProvider>
    </>
  );
};

export default TeamStructureTable;
