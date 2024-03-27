import axios from "axios";

const API_KEY = '7ca4ad959df6662dd6e82b0d65bb262435dfb21c';

export type getCompanies = {
    name: string,
    kpp?: string,
    inn: string,
    ogrn: string,
    management?: {
        name: string,
        post: string,
    },
    address: string
}

const getData = async (query: string) => {
    return await axios.get('http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party',
        {
            params: {
                query: query,
            },
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + API_KEY
            },

        }).then((res): getCompanies[] => {
        const companies = res.data.suggestions.map((item: any): getCompanies => {
            return {
                name: item.value,
                kpp: item.data.kpp,
                ogrn: item.data.ogrn,
                inn: item.data.inn,
                management: item.data.management,
                address: item.data.address?.value
            }
        })
        return companies
    })
}



export default getData