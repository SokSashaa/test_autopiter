import {getCompanies} from "../axios/axios";
import React from "react";

type savedOrgContext = {
    savedOrg: getCompanies[],
    setSavedOrg: React.Dispatch<React.SetStateAction<getCompanies[]>>,
}
export const savedOrgContext = React.createContext<savedOrgContext>({
    savedOrg: [],
    setSavedOrg: () => {
    }
});