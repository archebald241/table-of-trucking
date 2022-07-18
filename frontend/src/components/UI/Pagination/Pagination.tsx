import React from "react";
import "./Pagination.scss";
import {IconArrowDown, IconArrowLeft, IconArrowRight} from "../../../assets/Icons";
import {usePagination} from "../../../hooks/usePagination";
import classnames from "classnames";


interface IProps{
    perPage: number;
    setPerPage: Function;
    page: number;
    setPage: Function;
    count: number;
}

const Pagination:React.FC<IProps> = ({perPage, setPerPage, setPage, page, count}) => {
    const pageList = usePagination(page, perPage, count, 1);

    const perPageValues = [2, 4, 5, 10, 15, 20, 25, 30];
    const maxPage = pageList ? pageList[pageList.length - 1] : parseInt((count/perPage).toFixed(0));

    const changePage = (selectedPage: number | string) => {
        switch (selectedPage) {
            case "next":
                page < maxPage && setPage(page+1);
                break;
            case "previous":
                page > 1 && setPage(page-1);
                break;
            case "...":
                break;
            default:
                setPage(selectedPage);
        }
    };

    const changePerPage = (newPerPage: number) => {
        setPerPage(newPerPage);
        setPage(1);
    };

    return (
        <div className={"Pagination"}>
            <div>
                <span className={"arrow"} onClick={() => changePage("previous")}>
                    <IconArrowLeft color={"gray"} size={25} />
                </span>
                <div className={"pageNums"}>
                    {pageList && pageList.map((pageNum, index) =>
                        <span
                            className={classnames({
                                "number": pageNum !== "...",
                                "current": pageNum === page
                            })}
                            onClick={() => changePage(pageNum)}
                            key={index}>{pageNum}</span>
                    )}
                </div>
                <span className={"arrow"} onClick={() => changePage("next")}>
                    <IconArrowRight color={"gray"} size={25} />
                </span>
            </div>
            <div className={"selectContainer"}>
                <span className={"selectIcon"}><IconArrowDown color={"gray"}/></span>
                <select value={perPage} onChange={(e) => changePerPage(parseInt(e.target.value))}>
                    {perPageValues.map((value) =>
                        <option value={value} key={value}>Отображать по: {value}</option>
                    )}
                </select>
            </div>
        </div>
    );
};

export default Pagination;