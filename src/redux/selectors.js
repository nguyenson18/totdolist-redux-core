import { createSelector } from "@reduxjs/toolkit";

export const todoListSelector = (state) => state.todoList;

export const searchTextSelector = (state) =>state.filters.search;

export const filterStatusSelector =(state)=> state.filters.status;

export const filterPrioritiesesSelector = (state) => state.filters.priority


export const todoRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    filterPrioritiesesSelector,
    (todoList, status, searchText, priority) => {
        return todoList.filter((todo) => {
            if(status === "All"){
                return  priority.length 
                ? 
                todo.name.includes(searchText)
                && priority.includes(todo.priority)
                : todo.name.includes(searchText); 
            }
            return (
                todo.name.includes(searchText) && 
                (status === "Completed" ? todo.completed : !todo.completed)
            )
            
        });
    }
)
