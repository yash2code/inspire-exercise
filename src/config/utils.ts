import { URL } from "./api"

export const getLiteratureList = async () => {
  const data = await fetch(URL)
    .then((resp) => resp.json())
    .then((resp) => {
      const { hits } = resp
      const { total } = hits
      return { data: hits?.hits, total }
    })
    .catch((e) => {
      console.log(e.message)
      return { data: [], total: 0 }
    })

  return data
}
