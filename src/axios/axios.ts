import axios from "axios";

const API_KEY = '152956bd52d4ea856aa077e7fd05655b6b41a316';

export type getCompanies = {
    name: string,
    kpp?: string,
    inn: string,
    ogrn: string,
    management?: {
        name: string,
        post: string,
    },
    address: {
        name: string,
        region: string,
    }
}

const getData1 = async (query: string) => {
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
        return res.data.suggestions.map((item: any): getCompanies => {
            return {
                name: item.value,
                kpp: item.data.kpp,
                ogrn: item.data.ogrn,
                inn: item.data.inn,
                management: {
                    name: item.data.management?.name,
                    post: item.data.management?.post.toLowerCase()
                },
                address: {
                    name: item.data.address?.unrestricted_value,
                    region: item.data.address?.data.city_with_type ??
                        item.data.address?.data.region_with_type
                }
            }
        })

    })
}
const getDat2 = async (query: string) => {
    const r = await axios.get('http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party',
        {
            params: {
                query: query,
            },
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + API_KEY
            },

        })
    const r1: getCompanies[] = r.data?.suggestions.map((item: any): getCompanies => {
        return {
            name: item.value,
            kpp: item.data.kpp,
            ogrn: item.data.ogrn,
            inn: item.data.inn,
            management: {
                name: item.data.management?.name,
                post: item.data.management?.post.toLowerCase()
            },
            address: {
                name: item.data.address?.unrestricted_value,
                region: item.data.address?.data.city_with_type ??
                    item.data.address?.data.region_with_type
            }
        }
    })
    return r1
}

const getData = (query: string) => {
    return axios.get('http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party',
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
        return res.data.suggestions.map((item: any): getCompanies => {
            return {
                name: item.value,
                kpp: item.data.kpp,
                ogrn: item.data.ogrn,
                inn: item.data.inn,
                management: {
                    name: item.data.management?.name,
                    post: item.data.management?.post.toLowerCase()
                },
                address: {
                    name: item.data.address?.unrestricted_value,
                    region: item.data.address?.data.city_with_type ??
                        item.data.address?.data.region_with_type
                }
            }
        })

    })
}

const test = () => {
    return '123'
}

const test1 = async () => {
    return '123'
}

const test2 = async () => {
    //интервал 500 млс числа от 1 до 10
    for (let i = 0; i < 10; i++) {
        const q = await wait(500)
        console.log(i);
    }
}

const wait = (delay: number) => {
    const r = new Promise((res, rej) => {
        setTimeout(() => {
            res('123');
        }, delay)
    })
    return r
}


export default getData