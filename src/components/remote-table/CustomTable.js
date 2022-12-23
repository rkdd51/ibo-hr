import React,{useState,useMemo,useEffect} from "react";
import {
    Card,
    Container,
    Grid,
    Button,
    ThemeProvider,
    ALIGN_RIGHT,
    ALIGN_LEFT,
    Table,
    SplitDropdownButton,
    showModal,
    DropdownItem,
    SECONDARY_BUTTON,
    SIZE_SMALL,
    DROPDOWN_PAGINATION,
    Pagination,Typography,BODY_LARGE,Icon
  } from "@mds/mds-reactjs-library";
 import {icons} from "../../utils/icons"
import Loading from "../loading/loading"
import styled from "@emotion/styled";

  const TableChild = React.memo(
    (props) => {
      const {
        currentTableData,
        tableColumns,
        selectedPage,
        totalPageCount,
        handleOnPageChange,
      } = props;
  
      if (currentTableData && tableColumns) {
        return (
          <>
            <Table
              columns={tableColumns}
              rows={currentTableData}
              height="auto"
            />
            {currentTableData.length ? (
              <div style={{ textAlign: 'center' }}>
                <Pagination
                  type={DROPDOWN_PAGINATION}
                  selected={selectedPage}
                  total={totalPageCount}
                  onChange={handleOnPageChange}
                  style={{ marginTop: '6vh' }}
                  size={SIZE_SMALL}
                />
              </div>
            ) : (
              <Grid container>
                <Grid
                  item
                  span={12}
                  style={{
                    textAlign: 'center',
                    marginTop: '-10vh',
                    marginBottom: '2vh',
                  }}
                >
                  <Icon src={icons.Outline64Window} />
                  <Typography type={BODY_LARGE}>
                    <b>No results found</b>
                  </Typography>
                </Grid>
              </Grid>
            )}
          </>
        );
      } else {
        return   <Loading label="Please wait..." />;
      }
    },
    (prevProps, nextProps) => {
      return !(
        nextProps.currentTableData &&
        nextProps.tableColumns &&
        nextProps.filterClear
      );
  
      /*
    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
    }
  );
  

  export const CustomTable =({
    itemsPerPage,
    defaultSort,
    type,
    menuActions,
    filterShow,
    filterFields,
    children,
    admin,
    onRowClick,
    minWidth = 1000,
  })=>{
    const isMobile = window.innerWidth < 768;
    const TableGrid = isMobile
      ? styled(Grid)`
    overflow: auto;
      width: ${minWidth}px;
      div {
        div {
          div {
            div {
              &.ReactVirtualized__Table__headerRow {
                width: ${minWidth}px !important;
              }
              &.ReactVirtualized__Table__Grid {
                overflow: auto !important;
                width: ${minWidth}px !important;
              }
              div {
                &.ReactVirtualized__Grid__innerScrollContainer {
                  max-width: ${minWidth}px !important;
                  width: ${minWidth}px !important;
                  overflow: auto !important;
                }
                div {
                  &.ReactVirtualized__Table__row {
                    width: ${minWidth}px !important;
                    overflow-x: auto !important;
                div {
                  &.ReactVirtualized__Table__rowColumn {
                    div {
                      @media only screen and (max-width: 768px) {
                        white-space: normal;
                      }
                    }
                    
                  }
                }
  
                  }
                }
              }
            }
          }
        }
      }
    }
  `
      : Grid;

      const [tableData, setTableData] = useState();
  const [originalTableData, setOriginalTableData] = useState();
  const [tableColumns, setTableColumns] = useState();
  const [selectedPage, setSelectedPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(1);
  const pageSize = 10;

  const currentTableData = useMemo(() => {
    if (tableData) {
      const firstPageIndex = (selectedPage - 1) * pageSize;
      const lastPageIndex = firstPageIndex + pageSize;
      setTotalPageCount(Math.ceil(tableData.length / pageSize));
      return tableData.slice(firstPageIndex, lastPageIndex);
    }
  }, [selectedPage, tableData]);

  const handleOnPageChange = (page) => {
    setSelectedPage(page);
  };

  const loadColumns =()=>{
    let columns;
    switch(type){
        case 'hrTeam':
            columns =[
                {
                    dataKey: 'name',
                    label: 'Name',
                    width: 120,
                    sortable: false,
                  },
                  {
                    dataKey: 'office',
                    label: 'Office',
                    width: 120,
                    sortable: false,
                  },
                  {
                    dataKey: 'function',
                    label: 'Function',
                    width: 120,
                    sortable: false,
                  },
                  {
                    dataKey: 'edit',
                    label: '',
                    width: 120,
                    sortable: false,
                  },
            ];
            break;
            case 'teamStructure':
                columns=[
                    {
                        dataKey: 'name',
                        label: 'Name',
                        width: 280,
                        sortable: false,
                    },
                    {
                        dataKey: 'date',
                        label: 'Date',
                        width: 280,
                        sortable: false,
                    },
                    {
                        dataKey: 'file',
                        label: 'File/Image',
                        width: 280,
                        sortable: false,
                    },
                    {
                        dataKey: 'edit',
                        label: 'Edit',
                        width: 280,
                        sortable: false,
                    }
                ]
                break;
                default:
                    return false;
    }
    setTableColumns(columns);
  }

  useEffect(() => {
    loadColumns();

  }, []);
    return(    
           <ThemeProvider>
           <Grid
                 container
                 justify={'center'}
                 alignContent={'center'}
                 alignItems={'center'} >
          <TableGrid item span={12}>
          <TableChild
            currentTableData={currentTableData}
            tableColumns={tableColumns}
            onRowClick={onRowClick}
            selectedPage={selectedPage}
            totalPageCount={totalPageCount}
            handleOnPageChange={handleOnPageChange}
            TableGrid={TableGrid}
          />
        </TableGrid>
      </Grid>
           </ThemeProvider>
         
    )
  }

