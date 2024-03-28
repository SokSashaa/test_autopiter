import {getCompanies} from "../axios/axios";
import React from "react";

type savedOrgContext = {
    savedOrg: getCompanies[],
    setSaved0rg: React.Dispatch<React.SetStateAction<getCompanies[]>>,
}
export const savedOrgContext = React.createContext<savedOrgContext>({
    savedOrg: [],
    setSaved0rg: () => {}
});